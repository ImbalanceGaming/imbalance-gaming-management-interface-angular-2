System.register(['angular2/core', 'angular2/router', '../../services/user.service', "../../services/auth.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, auth_service_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(_userService, _authService) {
                    this._userService = _userService;
                    this._authService = _authService;
                    this.title = 'IGMS';
                }
                NavComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.user$.subscribe(function (updatedUser) { return _this.user = updatedUser; });
                };
                NavComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NavComponent.prototype, "routes", void 0);
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'app-nav',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/components/navigation/nav.component.html',
                        styleUrls: ['app/components/navigation/nav.component.css'],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.component.js.map