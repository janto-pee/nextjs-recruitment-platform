import {
  accordionListInterface,
  CourseDataInterface,
  courseSidebarList,
} from "./types";
import image1 from "@/assets/course-list/1.jpg";
import image2 from "@/assets/course-list/2.jpg";
import image3 from "@/assets/course-list/3.jpg";
import image4 from "@/assets/course-list/4.jpg";
import image5 from "@/assets/course-list/5.jpg";
import image6 from "@/assets/course-list/6.jpg";
import image7 from "@/assets/course-list/7.jpg";
import image8 from "@/assets/course-list/8.jpg";
import image9 from "@/assets/course-list/9.jpg";
import image10 from "@/assets/course-list/10.jpg";

export const CourseData: CourseDataInterface[] = [
  {
    id: 1,
    instructor: 1,
    image: image1,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Financial Economics",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: true,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 2,
    instructor: 2,
    image: image2,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Frontend Development - React, Vue & Angular",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: true,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 3,
    instructor: 3,
    image: image3,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Backend Development - Node.js & Go",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: true,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 4,
    instructor: 4,
    image: image4,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Data Science for business owners and startups",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: true,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 5,
    instructor: 5,
    image: image5,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Data Science for business owners and startups",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 6,
    instructor: 6,
    image: image6,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Data Science for business owners and startups",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 7,
    instructor: 7,
    image: image7,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Data Science for business owners and startups",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
  {
    id: 8,
    instructor: 8,
    image: image8,
    topic: "Photography",
    modifiedOn: "Jun 24, 2020",
    title: "Data Science for business owners and startups",
    lesson: 6,
    duration: "22h 0m",
    level: "Beginner",
    bestseller: false,
    popular: false,
    subtitle:
      " Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design Use XD User Interface, ",
    price: 300,
    href: "/",
    students: 3400,
    courseOverview: [
      "Citationem qui, sit modi veritatis beatae cupiditate blanditiis inventore. Id sequi minima voluptatem consequuntur at quaerat cum eos! Optio natus facere veritatis ipsam culpa Phasellus enim magna, varius et commodo ut, ultricies vitae",
      "Velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris",
      "Phasellus enim magna, varius et commodo ut,  enenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    ],
    courseLessons: [
      "Become a UX designer.",
      "You will be able to add UX designer to your CV.",
      "Become a UI designer.",
      "Build & test a full website design.",
      "Create your first UX brief & persona.",
      "How to use premade UI kits.",
      "Create quick wireframes.",
      "Downloadable exercise files",
      "Build a UX project from beginning to end.",
      "Learn to design websites & mobile phone apps.",
      "All the techniques used by UX professionals.",
      "You will be able to talk correctly with other UX design.",
    ],
    requirements: [
      "You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.",
      "No previous design experience is needed.",
      "No previous Adobe XD skills are needed.",
    ],
    tags: ["robotics", "software"],
    language: "English",
    courseCurriculum: 1,
  },
];

export const courseCurriculum: accordionListInterface[] = [
  {
    courseId: 1,
    title: "Course Introduction",
    lectures: 6,
    duration: "45min",
    active: true,
    content: [
      { time: "03:22", subcontent: "Get your copy of the slides" },
      { time: "00:10", subcontent: "Important note" },
      { time: "00:27", subcontent: "Scalability: Introduction" },
      { time: "11:57", subcontent: "Failover Strategies" },
    ],
  },
  {
    courseId: 2,
    title: "Designing system that scale",
    lectures: 6,
    duration: "45min",
    content: [
      { time: "09:05", subcontent: "Sharding Databases / NoSQL" },
      { time: "19:42", subcontent: "Data Lakes" },
      { time: "06:17", subcontent: "ACID compliance and the CAP theorem" },
      { time: "08:33", subcontent: "Using CAP to Choose a Database" },
      { time: "02:41", subcontent: "Caching: Introduction" },
      { time: "00:36", subcontent: "Caching Technologies" },
    ],
  },
  {
    courseId: 3,
    title: "Algorithms and Data Structure",
    lectures: 6,
    duration: "45min",
    content: [
      { time: "08:12", subcontent: "Eviction Strategies for Caching" },
      {
        time: "06:43",
        subcontent: "subContent Distribution Networks (CDN's)",
      },
      { time: "05:07", subcontent: "Resiliency: Introduction" },
      { time: "00:30", subcontent: "Designing for Resiliency" },
    ],
  },
  {
    courseId: 4,
    title: "Algorithms and Data Structure",
    lectures: 6,
    duration: "45min",
    content: [
      { time: "07:17", subcontent: "Scaling your Data: Introduction" },
      { time: "00:28", subcontent: "Distributed Storage Solutions" },
      { time: "08:47", subcontent: "HDFS Architecture" },
      { time: "04:50", subcontent: "Quiz: System Design" },
      { time: "tions", subcontent: "Algorithms Introduction" },
      { time: "00:38", subcontent: "Linked Lists" },
    ],
  },
  {
    courseId: 5,
    title: "Algorithms and Data Structure",
    lectures: 6,
    duration: "45min",
    content: [
      { time: "07:24", subcontent: "Graphs and Graph Traversal" },
      { time: "03:05", subcontent: "Search Algorithms" },
      { time: "02:12", subcontent: "Sort Algorithms" },
      { time: "02:11", subcontent: "Information Retrieval" },
      { time: "09:48", subcontent: "Quiz: Algorithms and Data Structures" },
    ],
  },
];

export const sidebarItem: courseSidebarList[] = [
  {
    icon: "ClockIcon",
    title: "hours on demand videos",
    option: 20,
  },
  {
    icon: "DevicePhoneMobileIcon",
    title: "Cross device accessibility",
    option: 3,
  },
  {
    icon: "BookOpenIcon",
    title: "Lifetime Access",
    option: "13 Hours",
  },
  {
    icon: "AcademicCapIcon",
    title: "Cetificate of completion",
    option: "Beginner",
  },
  // {
  //   icon: "PresentationChartBarIcon",
  //   title: "beginner fiendly",
  //   option: "",
  // },
  // {
  //   icon: "LanguageIcon",
  //   title: "available in at least 12 langages",
  //   option: "Yes",
  // },
];