import { JobController } from "./controller/JobController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "createPerson",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "verifyPerson",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "forgotPassword",
  },

  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "resetPassword",
  },

  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "accessAccount",
  },

  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "currentPerson",
  },

  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "updatePerson",
  },

  {
    method: "get",
    route: "/jobs",
    controller: JobController,
    action: "allJob",
  },
  {
    method: "get",
    route: "/jobs/:id",
    controller: JobController,
    action: "oneJob",
  },
  {
    method: "put",
    route: "/jobs",
    controller: JobController,
    action: "updatePerson",
  },
  {
    method: "delete",
    route: "/jobs/:id",
    controller: JobController,
    action: "removeJob",
  },

  //   start here

  // people routes

  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },

  // Sessions

  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },

  // Applicants

  // Applications

  // Employers

  // Jobs

  // Messages

  // Notification

  // Person

  // Rating

  // Verify Email
];
