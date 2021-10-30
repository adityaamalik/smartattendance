const routes = [
    {
        path: ["/"],
        exact: true,
        component: "Landing",
    },
    {
        path: ["/login"],
        exact: true,
        component: "Login",
    },
    {
        path: ["/register"],
        exact: true,
        component: "Register",
    },
    {
        path: ["/studentdashboard"],
        exact: true,
        component: "StudentDashboard",
    },
    {
        path: ["/teacherdashboard"],
        exact: true,
        component: "TeacherDashboard",
    },
    {
        path: ["/studentclasses"],
        exact: true,
        component: "StudentClasses",
    },
    {
        path: ["/studentinvitations"],
        exact: true,
        component: "StudentInvitations",
    },
    {
        path: ["/studentstatistics"],
        exact: true,
        component: "StudentStatistics",
    },
    {
        path: ["/teacherclasses"],
        exact: true,
        component: "TeacherClasses",
    },
    {
        path: ["/teachercreateclass"],
        exact: true,
        component: "TeacherCreateClass",
    },
    {
        path: ["/teacherstatistics"],
        exact: true,
        component: "TeacherStatistics",
    },
];

export default routes;
