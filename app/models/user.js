System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this._loggedIn = false;
                }
                Object.defineProperty(User.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "username", {
                    get: function () {
                        return this._username;
                    },
                    set: function (value) {
                        this._username = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "email", {
                    get: function () {
                        return this._email;
                    },
                    set: function (value) {
                        this._email = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "role", {
                    get: function () {
                        return this._role;
                    },
                    set: function (value) {
                        this._role = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "lastLogin", {
                    get: function () {
                        return this._lastLogin;
                    },
                    set: function (value) {
                        this._lastLogin = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "forename", {
                    get: function () {
                        return this._forename;
                    },
                    set: function (value) {
                        this._forename = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "surname", {
                    get: function () {
                        return this._surname;
                    },
                    set: function (value) {
                        this._surname = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "dob", {
                    get: function () {
                        return this._dob;
                    },
                    set: function (value) {
                        this._dob = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "country", {
                    get: function () {
                        return this._country;
                    },
                    set: function (value) {
                        this._country = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "website", {
                    get: function () {
                        return this._website;
                    },
                    set: function (value) {
                        this._website = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "avatar", {
                    get: function () {
                        return this._avatar;
                    },
                    set: function (value) {
                        this._avatar = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "twitterUsername", {
                    get: function () {
                        return this._twitterUsername;
                    },
                    set: function (value) {
                        this._twitterUsername = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "facebook", {
                    get: function () {
                        return this._facebook;
                    },
                    set: function (value) {
                        this._facebook = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "loggedIn", {
                    get: function () {
                        return this._loggedIn;
                    },
                    set: function (value) {
                        this._loggedIn = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map