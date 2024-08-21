const Routes = [
  { name: "About Us", path: "about-us" },
  {
    name: "Services",
    path: "service",
    children: [
      { name: "Web Development", path: "web-development" },
      { name: "Mobile App Development", path: "mobile-app-development" },
      { name: "Web Services", path: "web-services" },
      { name: "Project Management", path: "project-management" },
      { name: "Design", path: "design" },
      { name: "User Experience", path: "user-experience" }
    ]
  },
  { name: "Blog", path: "blog" }
]

export default Routes
