import { getProjectImage } from "@/lib/files";

export interface Project {
  id: string;
  title: string;
  description: string; // Short description
  image: string; // Hero image
  imagePosition?: string; // CSS object-position for tile cropping (e.g. "center 30%", "bottom")
  tags: string[];

  // Main story content (markdown) - the heart of the page
  content: string;
  contentLabel?: string; // Override "Project Description" header (use "" to hide it entirely)

  // Optional elements
  gallery?: { src: string; alt: string }[];
  videoUrl?: string;
  files?: { name: string; url: string; size?: string; type?: string }[];
  challenges?: string;
  keyFeatures?: string;
  lessonsLearned?: string;
  techStack?: string[]; // Optional array of technologies used

  // Visibility controls
  showInProjects?: boolean; // If false, hidden from Projects page (defaults to true)
  showInTerminal?: boolean; // If false, hidden from terminal sub-projects (defaults to true)
  showInRandomCommand?: boolean; // If false, excluded from terminal random command. Defaults to showInTerminal value if undefined
  showInRandomButton?: boolean; // If false, excluded from random button on projects page. Defaults to showInProjects value if undefined
}
export const projects: Project[] = [
  {
    id: "adventure",
    title: "[ CLASSIFIED ]",
    description:
      "You found a secret. Here's a peek at what's on the workbench.",
    image: getProjectImage("adventure", "hero.svg"),
    tags: ["Coming Soon"],
    showInProjects: false,
    showInTerminal: true,
    showInRandomCommand: false,
    showInRandomButton: true,
    contentLabel: "",
    content: `Well, you found the secret page. Nice work. Since you went through the trouble, here's a look at what's in the pipeline.

## Rubik's Cube World Record Attempt

Remember that cube solving robot from the hackathon? And the algorithm comparison project? Yeah, apparently I can't leave Rubik's cubes alone. I'm revisiting it again, but this time the goal is a Guinness World Record. The original solving algorithm was functional but far from optimized. I've since rewritten the solver from scratch in Rust and the performance gains are significant. Right now I'm deep in the hardware design and working through the integration and build steps. There's a lot of mechanical precision required to hit the speeds I'm targeting, so this one is going to take a while, but I'm committed to seeing it through.

## LED Totem / Antenna

This one is a bit of a weird crossover. I want to build an LED totem (think festival light fixture vibes) that doubles as a VHF/UHF antenna and potentially a battery powered ham radio repeater. When it's not out in the field, it would hang on my wall as a piece of LED art. I like the idea of something that looks purely decorative but is secretly a fully functional piece of radio infrastructure.

## Atlas the Radio Goat

Ok this one needs some context. I have a stuffed animal goat named Atlas. He has a high strength magnet installed in his stomach so he can ride around on my shoulder, and he already comes with me pretty much everywhere (skiing, fire spinning, festivals, you name it). He even has his own [Instagram](https://www.instagram.com/Atlas_The_Goat). The plan is to embed a ham radio inside of him so I can keep in touch with friends whether we're on the slopes, at a concert, or just wandering around. I think it would be really fun to be talking to what has effectively become my mascot and have him talk back to me with my friends' voices.

---

That's the backlog for now. If any of these end up becoming real projects, they'll make their way to the main page. Until then, consider yourself briefed.

<p class="invisible-ink" style="margin-top: 6rem; text-align: center; font-size: 1.1rem; font-family: monospace; user-select: none;">Created by Florian Schwarzinger</p>`,
  },
  {
    id: "flybox-redesign",
    title: "FlyBox Redesign",
    description:
      "Senior capstone project redesigning lab equipment used in Nobel Prize-winning circadian rhythm research at Brandeis University",
    image: getProjectImage("flybox-redesign", "hero.jpg"),
    tags: ["Mechanical", "Electrical"],
    content: `For my senior capstone project, I worked on a team of Olin students in collaboration with Brandeis University to redesign a piece of laboratory equipment called the FlyBox. The FlyBox was designed by Brandeis to monitor and track the behavior of fruit flies over multi-day periods for circadian rhythm research. Using specific lights in the FlyBox, researchers were able to use optogenetics to control individual neurons in the flies' brains and see how their sleep patterns changed. The device was created to replace existing methods of fruit fly behavior observation, offering more detailed and accurate data at a lower cost. Already, the FlyBox has been used to generate data for Nobel Prize-winning research on the circadian rhythm. However, the original version of the FlyBox was just a prototype. It lacked the durability and polish needed for long term use. Furthermore, Brandeis wished for the FlyBox to be created from a simple open source kit, able to be assembled by anybody. In a kit form, the FlyBox could be shared and used by partner institutions around the world. The goal of this project was to redesign the FlyBox from a functional prototype into a polished product that was more robust, able to be assembled from a kit, and be user-friendly.

<div class="image-row">
  <img src="/files/projects/flybox-redesign/FirstFlyBox.jpeg" alt="Original FlyBox" />
  <img src="/files/projects/flybox-redesign/hero.jpg" alt="Redesigned FlyBox" />
</div>

<div style="text-align: center; margin-top: -0.5rem; margin-bottom: 1.5rem; color: #888; font-style: italic;">Original FlyBox (left) and FlyBox after our redesign (right)</div>

My main contributions to this project were more on the administrative side as well as on the testing and assembly aspects of the project. I was the business manager for this project. I was in charge of purchasing things for the team, making sure every item we purchased was recorded, maintaining our budget, communicating with Olin's financial affairs team, etc. This took up a lot of my time initially as, while the team was in the prototyping phase, we were ordering things constantly. Eventually, things calmed down a bit as we started to realize what designs had potential and what specific materials we needed to buy. Throughout this whole initial process, I didn't really take the lead on any of the prototyping or design projects, instead acting as a helper for everyone else. This put me in a really good position to take on a testing role as I had a less in-depth knowledge of the engineering than anyone else on the team at that point. I was effectively our first line of testing to make sure that what we were actually developing could be assembled, operated, and maintained by people without intimate knowledge of the behind the scenes engineering. Most of my work in the second half of the project was user testing our FlyBox design, recording what could/needed to be improved, and either making that happen myself or communicating those changes to whoever needed to get them. I also took an active role in writing the extensive documentation package that came with our FlyBox. This included assembly instructions, troubleshooting steps, and general documentation outlining what engineering choices we made and why.

Check out the following links to see more about this project as well as the parts my teammates worked on:

- [FlyBox Github Repo](https://github.com/ctallum/FlyBox)
- [Our Olin College SCOPE project page](https://www.olin.edu/research/brandeis-university-rosbash-lab)
- [Brandeis Rosbash Lab](https://www.brandeis.edu/biology/faculty/rosbash-michael.html)`,
    videoUrl: "https://www.youtube.com/embed/nXNCLWPsdFo",
  },
  {
    id: "autonomous-submersible-rov",
    title: "Autonomous Submersible ROV",
    description:
      "Summer internship at UW Applied Physics Lab making underwater drones autonomously follow each other using OpenCV and ROS",
    image: getProjectImage("autonomous-submersible-rov", "hero.jpg"),
    imagePosition: "center bottom",
    tags: ["Robotics", "Software", "Computer Vision"],
    content: `During the summer of 2021, I got the privilege of working for the Applied Physics Laboratory at the University of Washington. Our project was to take 2 commercially available underwater drones (Remotely Operated Vehicles or ROVs) and see if they could serve as platforms for further research applications. To demonstrate this, we were given the task of making one ROV follow the other around autonomously utilizing OpenCV and ROS. We also needed to determine the feasibility of integrating additional sensors into the ROV.

<img src="/files/projects/autonomous-submersible-rov/BlueROV2.jpg" alt="BlueROV2" style="float: left; width: 45%; margin: 0 1.5rem 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

One of the bigger obstacles for me to overcome was that I had minimal experience working with OpenCV and ROS. During the duration of this internship I would learn and become much more comfortable with both software packages. One of the largest parts of this project was reverse engineering and understanding the preexisting architecture of the ROV enough to be able to integrate our own control code and external sensors into it. Additionally, this was a brand new project for the lab. None of our mentors or other interns had any previous experience with working with these ROVs, so a lot of the project was just figuring out the necessary knowledge to get to our final goal.

<div style="clear: both;"></div>

Through a lot of trial-and-error, we were able to make a custom interface that allowed both manual control of the ROV as well as the autonomous following of a fiducial marker (specifically, we used AruCo markers). This new interface specifically used ROS to communicate with and control the ROV.

<img src="/files/projects/autonomous-submersible-rov/HUD.png" alt="Custom ROV Interface HUD" style="float: right; width: 45%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

The key feature of this new interface was that it implemented an autonomous mode for controlling the ROV. This mode would take input from the active camera and, using OpenCV, parse the incoming image for any of the fiducial markers we were using for this project. If any fiducial markers were found, the ROV would attempt to navigate to a point a set distance directly behind the marker. Because we knew the exact parameters of the camera, and the size of the fiducial marker, we could get the relative x, y and z distances of the marker from the camera as well as pitch, roll, and yaw. With this information, it was just a matter of programing in responses to any of these values straying away from our desired values. So for example, if the fiducial marker's z value started getting larger than the desired range, the ROV would autonomously move forward until the value was back within the range we wanted.

<div style="clear: both;"></div>

In the end, we managed to show off a demonstration of one of the ROVs autonomously following the other around! We also determined that the ROV would be a good platform for further research applications. It is fairly compact and customizable and can also handle integration with additional sensors. This, combined with the onboard Raspberry Pi, make the BlueROV2 a pretty attractive option for tether-less applications. It is also quite easy to integrate our own custom control code so the range of potential applications is quite large.

There was a lot more to this project than what I can quickly talk about here. This includes the initial building of the ROVs, troubleshooting hardware issues, the intern team's journey through learning ROS, the hardware and software integration of a stereo camera, tons of testing, and so much more. To read the full report, which goes much more in detail, check out our [Summer Interns Report: BlueROV Team.](https://depts.washington.edu/uwaplopal/post/2021-08-31-bluerov-summer-interns-report.html)

The video below was shot during our final demonstration. The ROV with the fiducial marker is being manually controlled while the other ROV is autonomously controlled.

![Intern Team](/files/projects/autonomous-submersible-rov/interns.jpg)`,
    videoUrl: "https://www.youtube.com/embed/hxI62s1J6Yc",
    gallery: [
      {
        src: getProjectImage("autonomous-submersible-rov", "exploded_view.jpg"),
        alt: "ROV Exploded View",
      },
      {
        src: getProjectImage("autonomous-submersible-rov", "following.jpg"),
        alt: "ROV Following Demonstration",
      },
      {
        src: getProjectImage("autonomous-submersible-rov", "penetrator.png"),
        alt: "Hardware Penetrator Component",
      },
    ],
  },
  {
    id: "2x2-cube-solver",
    title: "2x2 Rubik's Cube Solver",
    description:
      "Final project comparing solving algorithms to find the fastest way to solve a 2x2 Rubik's Cube",
    image: getProjectImage("2x2-cube-solver", "hero.jpg"),
    tags: ["Software"],
    content: `<img src="/files/projects/2x2-cube-solver/unpacked_cube.jpg" alt="Unpacked 2x2 Cube" style="float: right; width: 35%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This was my final project that I did for my Data Structures and Algorithms class. We got to pick our own projects as long as they involved experimentally optimizing some aspect of the project. I decided to revisit my old [Rubik's Cube Solving Robot](#/projects/2x2-cube-solving-robot) project as the program I wrote for that was done earlier in the year when I had less knowledge of data structures and algorithms.

For my project, I wanted to focus on optimizing the overall runtime of the program and figure out which algorithm would lend itself most easily to this goal. To have a baseline to compare against, the first "algorithm" I wrote was fully random. It, quite simply, just made random moves until the cube was solved. The second algorithm I wrote was a backtracking algorithm and the third was a pretty standard Breadth First Search. The fourth one I wrote was a Double-Ended BFS algorithm that essentially had 2 simultaneous BFS algorithms starting at the scrambled and solved states and working towards each other until they connected.

<div style="clear: both;"></div>`,
    videoUrl: "https://www.youtube.com/embed/idxI1q5L5w0",
  },
  {
    id: "2x2-cube-solving-robot",
    title: "2x2 Rubik's Cube Solving Robot",
    description:
      "Winning submission for the MakeHarvard 2020 hackathon - a robot that solves a 2x2 Rubik's Cube autonomously",
    image: getProjectImage("2x2-cube-solving-robot", "hero.png"),
    tags: ["Software", "Robotics"],
    content: `<img src="/files/projects/2x2-cube-solving-robot/Dum-E.jpg" alt="Dum-E Robot" style="float: right; width: 40%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This project was my group's winning submission for the 2020 MakeHarvard make-a-thon at Harvard University. For this 24-hour long event, we decided we wanted to try to make a robot that could solve a 2x2x2 Rubik's cube without external input. The idea was to have a color sensor figure out the cube state, relay that information to a solver, and then execute the resulting sequence of moves. While my teammates tackled the hardware and firmware aspects of this project, I worked on writing the program that would take a scrambled state from the Arduino, generate the moves needed to solve the cube, and send them back to the Arduino so it could move the robot's motors accordingly.

My initial approach to this was to pre-process every possible state of the cube and link each state to the sequence of moves needed to reverse the scramble. I did this by essentially creating a tree that started at the solved state, and for each node in a queue, it created children nodes that represented the resulting state of each possible move. These children were then added to the queue if that state hadn't already been seen. Each state was stored in a dictionary that pointed to each state's respective nodes. The theory was that, once the program finished processing, solving any state could be done in almost constant time as the program would only have to reverse the path back to the head node. That being said, there was one major issue with this approach. I vastly underestimated the number of states the program would have to process. So, after 14 hours of this program running without completing, I scrapped it and started over.

<div style="clear: both;"></div>

Alright round two. With around 9 hours of the event left, I was scrambling (pun intended) to get this done so I took a page out of the book of speedcubing. There is a popular method of solving a 2x2 called the Ortega method. It is very fast but has a lot of algorithms for a human to remember. This made it ideal for my software as I could just write all of said algorithms into the software. After a few hours of programming and debugging, the program worked! The hardest part was over. From there it was just a matter of making the Arduino and Python code talk to each other which was accomplished using a Serial connection.

Even after the event, I was not satisfied with my solving program so I eventually revisited it in an effort to make it faster and more efficient. That project can be found [here](#/projects/2x2-cube-solver).

Check out our MakeHarvard submission page [here](https://devpost.com/software/2-by-2-by-2-rubik-s-cube-solver).`,
    videoUrl: "https://www.youtube.com/embed/e7CE5B1t01g",
  },
  {
    id: "robotic-tug-boat",
    title: "Robotic Tug Boat",
    description:
      "A boat that hunts, follows, and avoids obstacles using computer vision for my Fundamentals of Robotics course",
    image: getProjectImage("robotic-tug-boat", "hero.jpg"),
    tags: ["Robotics", "Computer Vision"],
    content: `<img src="/files/projects/robotic-tug-boat/Tug.png" alt="Robotic Tug Boat" style="float: right; width: 40%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This project was for my Fundamentals of Robotics course. As a group we were tasked with making three overarching functions: Hunt, Follow and Avoid. Hunt's task was to make the boat rotate back and forth in place, scanning the entire area in front of it trying to find a pink narwhal stuffed animal. Follow does exactly that, it turns the boat so that it can follow the narwhal. Avoid's task was to keep the boat safe by detecting obstacles and guiding the boat around them. We also needed an Arbiter to pick which outputs to obey.

I worked almost exclusively on the Follow function and the other sub-functions needed to make it work properly. The first thing we needed to get working was the detection of the narwhal. To do this we used a PixyCam which has built-in computer vision capabilities. Setting up the PixyCam to only recognize the narwhal took a large amount of time. Eventually we got the number of false detections to be basically non-existent. The sub-function returned a custom struct object containing information on if the narwhal was in frame as well as its x position, its y position and its angle from the center of the camera. This information was then used by the Follow function to track the narwhal and send a heading value to an arbiter.

<div style="clear: both;"></div>

I also worked on the arbiter. All 3 of the overarching functions output an array representing -90 degrees to 90 degrees. The arrays contained values from -100 to 100 that represented each function's preference on where to turn the boat (100 being strong preference, 0 being neutral, and -100 being strong preference against). The arbiter took these outputs and let them interact constructively. The resulting largest value would correspond to the ideal heading and the arbiter would send that to the motors to turn the boat.

One thing to note is that, to avoid conflict, the arbiter also contained a state machine where it would ignore the Hunt output if there was a narwhal detected and would ignore the Follow output if there was no narwhal detected.`,
    videoUrl: "https://www.youtube.com/embed/yWfW1rUIOq8",
  },
  {
    id: "shadow-boxing-robot",
    title: "Shadow Boxing Robot",
    description:
      "Real Steel inspired Rock'em Sock'em robots controlled by mimicking human poses",
    image: getProjectImage("shadow-boxing-robot", "hero.jpg"),
    tags: ["Mechanical"],
    content: `This project was for my Principles of Engineering course. We had a bit over a month to put together a project that involved non-trivial mechanical, software, and electrical components. My group took some inspiration from the movie Real Steel and decided we wanted to make a more advanced version of Rock'em Sock'em robots. We wanted both robots to be able to be controlled through mimicking the pose of a human controller as depicted in one of the pivotal moments of the movie.

For this project I worked mainly on the CAD and fabrication of select mechanical aspects of the robot. All the final CAD was done in OnShape. I worked the most on the swashplate that acted as a hip joint allowing the robot to lean forwards/backwards and side to side. The pan and roll motors were each driven independently and the mechanisms were designed to not interfere with each other. This meant you could operate them both at the same time and have a wider range of motion.

![Swashplate Hip Joint CAD](/files/projects/shadow-boxing-robot/Swashplate.jpg)

<div style="text-align: center; margin-top: -0.5rem; margin-bottom: 1.5rem; color: #888; font-size: 0.85rem; font-style: italic;">The CAD above is missing the motors and enclosure to show the actual mechanism</div>

I also worked on creating the 2 degree of freedom shoulder joint. For this, one of my teammates made a custom slew bearing to use as one of the main parts. This allowed us to cut down drastically on the overall cost of the project and it worked surprisingly well. The bottom of the shoulder mounted to the torso in a way that angled the bottom motor into a hole in the torso for it to sit. From there we just designed the two different sections of the shoulder to attach to the two different portions of the slew bearing. The gears were added later to allow the encoders to be able to read any rotation.

![Shoulder Joint CAD](/files/projects/shadow-boxing-robot/Shoulder.jpg)`,
  },
  {
    id: "forest-fire-simulation",
    title: "Forest Fire Simulation",
    description:
      "Simulating forest fire spread in Yosemite Valley using real-world topography and wind data",
    image: getProjectImage("forest-fire-simulation", "hero.jpg"),
    tags: ["Software"],
    content: `![BLAND Fire Simulation](/files/projects/forest-fire-simulation/BlandFire1.jpg)

<div style="text-align: center; margin-top: -0.5rem; margin-bottom: 1.5rem; color: #888; font-size: 0.85rem; font-style: italic;">We affectionately named our program BLAND after a site that helped us immensely with gathering our data, LANDFIRE</div>

<img src="/files/projects/forest-fire-simulation/hero.jpg" alt="Forest Fire Simulation" style="float: right; width: 40%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This was my final project for my Software Design class. My group and I decided that we wanted to make a project on simulating the spread of forest fires using a cellular automaton model. We wanted the project to be able to factor in real world data on topography, wind speed and wind direction for a specific area and time. We chose Yosemite Valley and the surrounding area as the main area for our program so we could theoretically use a past fire (i.e. the 2018 Ferguson Fire) to check the accuracy of our final project.

My group broke the overall program into three main areas: the actual simulation, the topography data, and the wind related data. I initially worked with another one of my groupmates on getting a very basic simulation running without any external data and figuring out what data structures and other elements we would need to use. While my groupmate continued to work on the simulation and refine it to be as accurate as he could, I moved onto attempting to get and integrate the topography data.

<div style="clear: both;"></div>

Getting the topography data was surprisingly difficult initially as it involved researching the best way to do this and then learning how to work Digital Elevation Model (DEM) files through the GDAL python library. After a lot of troubleshooting, I was able to take the data from the DEM files and convert them into matrices that our simulation could easily work with. From there I worked with the group member working on the actual simulation to integrate my data points into the overarching simulation.

This project seemed a lot more straightforward when the three of us started it so we were unable to refine the program to be as accurate as we would have liked. There was a lot of troubleshooting and debugging involved and a lot of our datasets weren't immediately compatible. This is where the majority of the work came in for me. Another thing was that many of the suggestions for working with topography data were outdated or no longer supported so that also took a good chunk of time to figure out how to make work.

Ultimately, we ended up with a project that we were very happy with. We initially went into the project with some stretch goals that we unfortunately did not manage to get to. These involved adding some more data sets (fuel type, roads, etc) and tweaking the base equations to make the overall simulation more accurate.`,
    videoUrl: "https://www.youtube.com/embed/awgBne0lUnI",
    gallery: [
      {
        src: getProjectImage("forest-fire-simulation", "BlandFire.jpg"),
        alt: "BLAND Fire Simulation Output",
      },
    ],
  },
  {
    id: "parametric-curve-following-robot",
    title: "Parametric Curve Following Robot",
    description:
      "Guiding a robot across a precision-cut bridge using parametric equations and computed wheel velocities",
    image: getProjectImage("parametric-curve-following-robot", "hero.jpg"),
    tags: ["Robotics", "Controls"],
    content: `This project was for my Qualitative Engineering Analysis (QEA) class. We used Neatos as the robots we were controlling. At the beginning of the assignment we were given the options to pick one of two different curves to plot and eventually have our robot follow. I picked the S-shaped parametric curve shown below. The first task we had was to use MATLAB to plot the curve and add tangent/normal vectors at various points hence the green and red arrows respectively.

<div class="image-row">
  <img src="/files/projects/parametric-curve-following-robot/Capture.JPG" alt="S-shaped Parametric Curve" />
  <img src="/files/projects/parametric-curve-following-robot/ControlResponse.jpg" alt="Wheel Velocity Graphs" />
</div>

From there, I could use various equations to compute the velocity of the left and right wheels over time (shown on the right). I then wrote a program to send these wheel velocities to the Neato to guide it across the Bridge of Doom. The Bridge of Doom was a sheet of plywood that had been cut to follow the parametric curve I was given. It was also designed to only be slightly larger than the Neato to lower the room for error so our calculations and programs had to be precise. My attempt at crossing the Bridge of Doom can be seen below.`,
    videoUrl: "https://www.youtube.com/embed/oGO3A_GjIsU",
  },
  {
    id: "kinetic-train-sculpture",
    title: "Kinetic Train Sculpture",
    description:
      "Victorian-era kinetic sculpture with belt drives, gear transmissions, and cam mechanisms",
    image: getProjectImage("kinetic-train-sculpture", "hero.jpg"),
    imagePosition: "center 40%",
    tags: ["Mechanical"],
    content: `<img src="/files/projects/kinetic-train-sculpture/hero.jpg" alt="Kinetic Train Sculpture" style="float: right; width: 40%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This project was a group project for my Introduction to Mechanical Prototyping class. We were given the project to create a kinetic sculpture that had something to do with the Victorian era. Now, what's the first thing that pops into your head when you think of the Victorian era? Trains, right? Well maybe not but, that is what we wanted our structure to be. Additionally, the sculpture had to contain specific mechanical elements (i.e. a belt, a chain, 10+ sheet metal/acrylic parts, a cam/cam follower, a 4-bar linkage, 2 gear transmissions, etc.).

I worked mostly on the base for the train to sit on. The idea the group came up with was to have all the internal mechanisms for the train be driven through the wheels of the train. What this entailed was that the train would be resting on 2 "rails" (belts) that were driven by a motor. From there, the wheels would be driven by the rotating belts, turning a shaft inside the train and driving all the other elements of the sculpture.

<div style="clear: both;"></div>

This meant that I had to design mounts for the motor, spaces for a gear transmission from the motor to the belt drives, and all the parts for 2 belt drives. All these parts were pretty standard. For each belt drive there were two small, toothless, timing belt pulleys that were slightly raised from the top of the base. There were also two large pulleys that, when used in conjunction with a small, toothed pulley, created the tensioning system for the belt. That small pulley was connected to a shaft that, through a gear transmission, was powered directly by the motor.

Everything was modeled and assembled in SolidWorks before fabrication. The box itself was made from plywood cut with a CNC router, the shafts turned on a lathe, and the pulleys were 3D printed where necessary.`,
    videoUrl: "https://www.youtube.com/embed/VWw_QtwO2LE",
  },
];
