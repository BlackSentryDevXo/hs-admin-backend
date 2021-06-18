"use strict";
window.app_version = 2, angular.module("quizApp", ["ui.router", "ngFileUpload", "ngAnimate","firebase",'ngJsonExportExcel', "ngMaterial","lfNgMdFileInput", "chart.js","md.data.table","gridshore.c3js.chart", "angular-growl", "growlNotifications","angular-loading-bar", "easypiechart", "ui.sortable", angularDragula(angular), "bootstrapLightbox", "materialCalendar", "pascalprecht.translate",'cl.paging','ngWYSIWYG','ngSanitize','ngCsv','googlechart']).config(["cfpLoadingBarProvider", function(l) {
    l.latencyThreshold = 5, l.includeSpinner = !1
}]).config(["$translateProvider", function(l) {
    l.useStaticFilesLoader({
        prefix: "languages/",
        suffix: ".json"
    }), l.preferredLanguage("en")
}]).config(['$urlRouterProvider',function (t) {
    t.otherwise("/app/login");
}]).config(["$stateProvider", function(l) {
    l.state("app", {
        url: "/app",
        templateUrl: "partials/app.html?v=" + window.app_version
    }).state("login", {
        url: "/login",
        parent: "app",
        templateUrl: "partials/pages/login.html?v=" + window.app_version,
        controller: "LoginCtrl"
    }).state("dashboard", {
        url: "/dashboard",
        parent: "app",
        templateUrl: "partials/layouts/dashboard.html?v=" + window.app_version,
        controller: "DashboardCtrl"
    }).state("home", {
        url: "/home",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/home.html?v=" + window.app_version,
        controller: "HomeCtrl"
    }).state("services", {
        url: "/services",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/services/services.html?v=" + window.app_version,
        controller: "ServiceCtrl"
    }).state("editService", {
        url: "/editService/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/services/editService.html?v=" + window.app_version,
        controller: "ServiceCtrl"
    }).state("AddBrand", {
        url: "/AddBrand",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/brands/AddBrand.html?v=" + window.app_version,
        controller: "BrandCtrl"
    }).state("brands", {
        url: "/brands",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/brands/brands.html?v=" + window.app_version,
        controller: "BrandCtrl"
    }).state("editBrand", {
        url: "/editBrand/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/brands/editBrand.html?v=" + window.app_version,
        controller: "BrandCtrl"
    }).state("addAdmin", {
        url: "/addAdmin",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/admin/AddAdmin.html?v=" + window.app_version,
        controller: "AdminCtrl"
    }).state("administrators", {
        url: "/administrators",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/admin/administrators.html?v=" + window.app_version,
        controller: "AdminCtrl"
    }).state("account", {
        url: "/account",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/admin/account.html?v=" + window.app_version,
        controller: "AccountCtrl"
    }).state("editAdmin", {
        url: "/editAdmin/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/admin/editAdmin.html?v=" + window.app_version,
        controller: "AdminCtrl"
    }).state("addQuestioner", {
        url: "/addQuestioner",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questioner/addQuestioner.html?v=" + window.app_version,
        controller: "QuestionerCtrl"
    }).state("questioners", {
        url: "/questioners",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questioner/questioners.html?v=" + window.app_version,
        controller: "QuestionerCtrl"
    }).state("editQuestioner", {
        url: "/editQuestioner/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questioner/editQuestioner.html?v=" + window.app_version,
        controller: "QuestionerCtrl"
    }).state("addCategory", {
        url: "/addCategory",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/addCategory.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("addSubCategory", {
        url: "/addSubCategory/:parent",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/addCategory.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("gameCategories", {
        url: "/gameCategories/:game/:category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/gameCategories.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("questionerCategories", {
        url: "/questionerCategories/:category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/questionerCategories.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("myCategories", {
        url: "/myCategories/:myId",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/myCategories.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("categories", {
        url: "/categories",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/categories.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("subCategories", {
        url: "/subCategories/:parent",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/categories.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("editCategory", {
        url: "/editCategory/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/categories/editCategory.html?v=" + window.app_version,
        controller: "CategoryCtrl"
    }).state("prizes", {
        url: "/prizes/:category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/prizes/prizes.html?v=" + window.app_version,
        controller: "prizesCtrl"
    }).state("editPrize", {
        url: "/editPrize/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/prizes/editPrize.html?v=" + window.app_version,
        controller: "prizesCtrl"
    }).state("questions", {
        url: "/questions/:category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questions/questions.html?v=" + window.app_version,
        controller: "QuestionsCtrl"
    }).state("game_questions", {
        url: "/game_questions/:game_category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questions/questions.html?v=" + window.app_version,
        controller: "QuestionsCtrl"
    }).state("editQuestion", {
        url: "/editQuestion/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/questions/editQuestion.html?v=" + window.app_version,
        controller: "QuestionsCtrl"
    }).state("theme", {
        url: "/theme/:brand",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/themes/theme.html?v=" + window.app_version,
        controller: "themeCtrl"
    }).state("editTheme", {
        url: "/editTheme/:brand/:name",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/themes/editTheme.html?v=" + window.app_version,
        controller: "themeCtrl"
    }).state("theme_1", {
        url: "/theme_1",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/themes/main.html?v=" + window.app_version,
        controller: "theme_Ctrl"
    }).state("editAsset", {
        url: "/editAsset/:name",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/themes/editMain.html?v=" + window.app_version,
        controller: "theme_Ctrl"
    }).state("ads", {
        url: "/ads/:brand",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/ads/ads.html?v=" + window.app_version,
        controller: "adsCtrl"
    }).state("notifications", {
        url: "/notifications",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/ads/ads.html?v=" + window.app_version,
        controller: "adsCtrl"
    }).state("editAd", {
        url: "/editAd/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/ads/editAd.html?v=" + window.app_version,
        controller: "adsCtrl"
    }).state("power-ups", {
        url: "/power-ups",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/power-ups/power-ups.html?v=" + window.app_version,
        controller: "PowerCtrl"
    }).state("edit-power-ups", {
        url: "/edit-power-ups/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/power-ups/edit-power-ups.html?v=" + window.app_version,
        controller: "PowerCtrl"
    }).state("teams", {
        url: "/teams",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/teams/team.html?v=" + window.app_version,
        controller: "teamCtrl"
    }).state("add-team", {
        url: "/add-team",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/teams/addteam.html?v=" + window.app_version,
        controller: "teamCtrl"
    }).state("edit-team", {
        url: "/edit-team/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/teams/editteam.html?v=" + window.app_version,
        controller: "teamCtrl"
    }).state("assets", {
        url: "/assets",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/assets/assets.html?v=" + window.app_version,
        controller: "assetCtrl"
    }).state("add-asset", {
        url: "/add-asset",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/assets/addAsset.html?v=" + window.app_version,
        controller: "assetCtrl"
    }).state("edit-asset", {
        url: "/edit-asset/:id",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/assets/editAsset.html?v=" + window.app_version,
        controller: "assetCtrl"
    }).state("users", {
        url: "/users",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/users/users.html?v=" + window.app_version,
        controller: "userCtrl"
    }).state("sms", {
        url: "/sms",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/users/sms.html?v=" + window.app_version,
        controller: "smsCtrl"
    }).state("promo", { ///// I Added this//////
        url: "/promo",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/promo.html?v=" + window.app_version,
        controller: "promoCtrl"
    }).state("sessions", {
        url: "/sessions",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/users/sessions.html?v=" + window.app_version,
        controller: "userCtrl"
    }).state("subscriptions", {
        url: "/subscriptions",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/subscriptions/subscriptions.html?v=" + window.app_version,
        controller: "subsCtrl"
    }).state("leaderboard", {
        url: "/leaderboard/:type/:id/:category",
        parent: "dashboard",
        templateUrl: "partials/pages/dashboard/leaderboard/leaderboard.html?v=" + window.app_version,
        controller: "leaderboardCtrl"
    })
}])// various events being fired
    .run(['$rootScope','auth','$state',function ($rootScope) {
        $rootScope.$on('$stateChangeStart', function(){
            $rootScope.loading = true;
        });
        $rootScope.$on('$stateNotFound', function(){

        });
        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.loading = false;
            $rootScope.$broadcast('state-change', {stateChange: true});
        });
        $rootScope.$on('$stateChangeError', function(){

        });
        $rootScope.$on('$viewContentLoading', function(){});
        $rootScope.$on('$viewContentLoaded', function(){
        });
    }]).directive("stats", function() {
        return {
            templateUrl: "templates/stats.html?v=" + window.app_version,
            restrict: "E",
            replace: !0,
            scope: {
                options: "=",
                percent: "@",
                value: "@",
                header: "@",
                arrow: "@",
                footer: "@"
            }
        }
    }).directive("relinkEvent", ["$rootScope", "$timeout", function(l, t) {
        return {
            transclude: "element",
            restrict: "A",
            link: function(e, a, i, s, n) {
                var o = null,
                    r = function() {
                        o && (o.remove(), o = null), t(function() {
                            n(function(l) {
                                a.parent().append(l), o = l
                            })
                        }, 250)
                    };
                r(), l.$on(i.relinkEvent, r)
            }
        }
    }]).directive("todolist", function() {
        return {
            templateUrl: "templates/to-do.html?v=" + window.app_version,
            restrict: "E",
            replace: !0,
            controller: ["$scope", function (l) {
                setTimeout(function () {
                    $(".todo-list-wrap").perfectScrollbar()
                }, 100)
            }]
        };
    }).controller("todoCtrl", ["$scope", function(l) {
        function t() {
            for (var l = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; 5 > e; e++) l += t.charAt(Math.floor(Math.random() * t.length));
            return l
        }
        l.todos = [{
            text: "Meeting with Nabindar Singh.",
            done: !1,
            id: "option1"
        }, {
            text: "Exercise at 6:pm with Nicholas.",
            done: !1,
            id: "option3"
        }, {
            text: "Avengers Age of Ultron.",
            done: !1,
            id: "option4"
        }, {
            text: "Henna birthday at Mezbaan.",
            done: !1,
            id: "option5"
        }], l.addTodo = function() {
            l.todos.push({
                text: l.formTodoText,
                done: !1,
                id: t()
            }), l.formTodoText = ""
        }
    }]);
