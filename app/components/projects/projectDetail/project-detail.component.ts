import {Component}                          from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES}   from 'angular2/router';

import {FormButtonInterface}    from "../../../directives/form-buttons/form-button.interface";
import {FormDataService}        from "../../../services/form-data.service";
import {MessagesDirective}      from "../../../directives/messages/messages.directive";
import {Project}                from "../../../models/project";
import {ProjectService}         from "../../../services/project.service";
import {UserService} from "../../../services/user.service";
import {DynamicModalFormDirective} from "../../../directives/dynamic-form/modalForm/dynamic-modal-form.directive";
import {ProjectPackage} from "../../../models/project-package";
import {ProjectPackageService} from "../../../services/project-package.service";

@Component({
    selector: 'group-detail',
    templateUrl: 'app/components/projects/projectDetail/project-detail.component.html',
    styleUrls: ['app/components/projects/projectDetail/project-detail.component.css'],
    directives: [DynamicModalFormDirective, MessagesDirective, ROUTER_DIRECTIVES, MessagesDirective]
})

export class ProjectDetailComponent {

    title:string;
    projects:Array<Project> = [];
    project:Project;
    editProjectFormData:Array<any> = [];
    addPackageFormData:Array<any> = [];
    editPackageFormData:Array<any> = [];
    formButtonData:Array<FormButtonInterface> = [];
    searchReturn:Array<any>;

    constructor(private _projectService:ProjectService,
                private _routeParams:RouteParams,
                private _router:Router,
                private _formDataService:FormDataService,
                private _userService:UserService,
                private _packageService:ProjectPackageService) {
        this.title = 'Project Detail';
        this.project = new Project();
    }

    ngOnInit() {

        this._projectService.projects$.subscribe(projects => this.projects = projects);
        this.getProjectData();

    }

    saveProjectChanges(formData) {

        this.project.description = formData.description;
        this.project.url = formData.url;
        //noinspection TypeScriptUnresolvedVariable
        this.project.lead_user_id = formData.selectedSearchValue;

        this._projectService.update(this.project).then(() => this.getProjectData());

    }

    deleteProject() {
        this._projectService.delete(this.project);
        this._router.navigate(['/Projects', 'AllProjects']);
    }

    onSearch(searchValue:string) {
        this._userService.findUsers(searchValue)
            .then(data => this.searchReturn = data);
    }

    createPackage(formData) {

        let newPackage = this._packageService.create({
            name: formData.name,
            repository: formData.repository,
            deploy_branch: formData.deploy_branch,
            deploy_location: formData.deploy_location
        });
        newPackage.project = this.project;
        this._packageService.add(newPackage).then(() => this.getProjectData());

    }

    editPackage(id:number) {
        this._router.navigate(['../PackageDetail', {id: id, packageId: this.project.id}])
    }

    deletePackage(id: number) {
        this._packageService.delete(new ProjectPackage(id)).then(() => this.getProjectData());
    }

    private getProjectData() {
        let id = +this._routeParams.get('id');
        let page = +this._routeParams.get('page');

        this._projectService.getProjects(page, true).then(() => {
            this._projectService.get(id).then(project => {
                this.project = project;
                this._formDataService.getProjectDetailData(project)
                    .then(formData => this.editProjectFormData = formData);
                this._formDataService.getPackageCreateData()
                    .then(formData => this.addPackageFormData = formData);
                this._formDataService.getDefaultButtons()
                    .then(formButtonData => this.formButtonData = formButtonData);
            });
        });
    }

}