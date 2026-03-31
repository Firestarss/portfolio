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
    id: "formatting-reference",
    title: "Formatting Reference",
    description:
      "A comprehensive cheat sheet for all available project page formatting options, layouts, and features.",
    image: getProjectImage("formatting-reference", "hero.svg"),
    imagePosition: "center 60%",
    tags: ["Reference", "Documentation"],
    showInProjects: false,
    showInTerminal: false,
    showInRandomCommand: false,
    showInRandomButton: false,
    contentLabel: "Formatting Cheat Sheet",
    techStack: ["React", "TypeScript", "Markdown", "Tailwind CSS", "Framer Motion"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [
      { src: "/files/projects/formatting-reference/placeholder-1.svg", alt: "Gallery image A" },
      { src: "/files/projects/formatting-reference/placeholder-2.svg", alt: "Gallery image B" },
      { src: "/files/projects/formatting-reference/placeholder-3.svg", alt: "Gallery image C" },
      { src: "/files/projects/formatting-reference/placeholder-4.svg", alt: "Gallery image D" },
    ],
    files: [
      { name: "example.txt", url: "/files/projects/formatting-reference/example.txt" },
      { name: "hero.svg", url: "/files/projects/formatting-reference/hero.svg" },
      { name: "example-code.py", url: "/files/projects/formatting-reference/example.txt" },
      { name: "design-file.sldprt", url: "/files/projects/formatting-reference/example.txt" },
      { name: "schematic.kicad_pcb", url: "/files/projects/formatting-reference/example.txt" },
      { name: "project-archive.zip", url: "/files/projects/formatting-reference/example.txt" },
    ],
    challenges: `Here is the **challenges** section. It renders markdown separately from the main content, under its own "Challenges & Solutions" header.

- You can use **bold**, *italics*, and [links](https://example.com) here
- It supports all the same markdown as the main content
- This is useful for separating concerns and keeping things organized

> This section only appears if the \`challenges\` field is defined on the project.`,
    keyFeatures: `This is the **keyFeatures** section. It renders under its own "Key Features" header.

1. Feature one with **bold text**
2. Feature two with *italic text*
3. Feature three with \`inline code\`

> This section only appears if the \`keyFeatures\` field is defined on the project.`,
    lessonsLearned: `This is the **lessonsLearned** section. It renders under its own "Lessons Learned" header.

The key takeaway here is that all three of these optional sections (\`challenges\`, \`keyFeatures\`, \`lessonsLearned\`) work identically. They each:

- Accept markdown content
- Render with their own heading and separator
- Only appear when the field is defined
- Appear below the gallery and video sections`,
    content: `This page is a comprehensive reference for every formatting option available when creating project pages. It is completely hidden from the projects grid, terminal, and random buttons. Access it directly at \`/#/projects/formatting-reference\`.

---

# Project Interface Fields

Before diving into content formatting, here's every field available on a project:

| Field | Type | Required | Description |
|---|---|---|---|
| \`id\` | string | Yes | URL slug (e.g. "my-project" becomes \`/#/projects/my-project\`) |
| \`title\` | string | Yes | Project title displayed on the page and card |
| \`description\` | string | Yes | Short description shown on the card and below the title |
| \`image\` | string | Yes | Hero image path. Use \`getProjectImage("id", "hero.jpg")\` |
| \`imagePosition\` | string | No | CSS object-position for tile/hero cropping (e.g. "center bottom", "center 30%") |
| \`tags\` | string[] | Yes | Tag chips shown on the card and project page |
| \`content\` | string | Yes | Main markdown content (the body of the page) |
| \`contentLabel\` | string | No | Override "Project Description" header. Use \`""\` to hide it entirely |
| \`techStack\` | string[] | No | Technology badges shown above the content |
| \`gallery\` | array | No | Clickable image gallery below the content |
| \`videoUrl\` | string | No | YouTube embed URL for a demo video section |
| \`files\` | array | No | Downloadable files section with auto-detected icons |
| \`challenges\` | string | No | Separate markdown section for challenges |
| \`keyFeatures\` | string | No | Separate markdown section for key features |
| \`lessonsLearned\` | string | No | Separate markdown section for lessons learned |
| \`showInProjects\` | boolean | No | Show on the projects grid (defaults true) |
| \`showInTerminal\` | boolean | No | Show in terminal sub-projects (defaults true) |
| \`showInRandomCommand\` | boolean | No | Include in terminal random command |
| \`showInRandomButton\` | boolean | No | Include in projects page random button |

---

# Markdown Text Formatting

## Headings

Use \`#\` through \`######\` for heading levels 1-6. Note: H1 and H2 are the most commonly useful inside project content since the page title is already rendered separately.

## This is an H2

### This is an H3

#### This is an H4

##### This is an H5

###### This is an H6

## Inline Formatting

Regular text looks like this. You can make text **bold with double asterisks**, *italic with single asterisks*, or ***bold and italic with triple asterisks***. You can also use ~~strikethrough with double tildes~~.

Inline \`code\` uses backticks. This is useful for referencing \`variable_names\`, \`file_paths\`, or \`terminal commands\`.

## Links

- [External link](https://example.com) using \`[text](url)\` syntax
- [Internal link to another project](#/projects/flybox-redesign) using \`[text](#/projects/project-id)\`
- Raw URLs are NOT auto-linked. Always use the bracket syntax.

## Blockquotes

> This is a blockquote. It renders with an orange left border and muted text.
>
> You can have multiple paragraphs inside a blockquote. They're great for callouts, quotes, or important notes.

## Horizontal Rules

Use \`---\` to create a horizontal rule (like the ones separating sections on this page):

---

# Lists

## Unordered Lists

- First item
- Second item
  - Nested item A
  - Nested item B
    - Deep nested item
- Third item

## Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

## Task Lists (Checkboxes)

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Another incomplete task

---

# Code

## Inline Code

Use backticks for \`inline code snippets\` within a paragraph.

## Code Blocks

Use triple backticks for multi-line code blocks. You can optionally specify a language for syntax highlighting:

\`\`\`python
def solve_cube(state):
    """Example Python code block"""
    moves = calculate_optimal_moves(state)
    for move in moves:
        state = apply_move(state, move)
    return state
\`\`\`

\`\`\`rust
fn main() {
    let greeting = "Hello from Rust!";
    println!("{}", greeting);
}
\`\`\`

\`\`\`bash
# Terminal commands
cd ~/projects/my-robot
cargo build --release
./target/release/solver
\`\`\`

---

# Tables

Tables use the standard GitHub-Flavored Markdown syntax:

| Component | Material | Quantity | Notes |
|---|---|---|---|
| Base plate | Aluminum 6061 | 1 | CNC milled |
| Servo motor | MG996R | 6 | High torque |
| Gear assembly | PLA | 12 | 3D printed |
| Microcontroller | Arduino Mega | 1 | Main brain |
| Camera module | Raspberry Pi Cam v2 | 1 | Color detection |

---

# Images

## Default Markdown Image (Centered, 70% Width)

Use standard markdown syntax. Images without custom styling get the \`markdown-image\` class, which centers them at 70% width with rounded corners and a shadow:

![Placeholder image A](/files/projects/formatting-reference/placeholder-1.svg)

## Full Width Image (Inline HTML)

Use an \`<img>\` tag with \`width: 100%\` to go full width:

<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="Full width image" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

## Float Left (Text Wraps Right)

Use \`float: left\` to have text wrap around the right side of an image. Good for mixing images with paragraphs.

<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Float left" style="float: left; width: 40%; margin: 0 1.5rem 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

This text wraps around the floated image on the right side. This is a common pattern for project pages where you want to describe something alongside an image without breaking the reading flow. The image takes up 40% of the width, with a margin on the right and bottom to give the text some breathing room. You can adjust the width percentage and margins to taste. Keep in mind that on mobile, floated images can look cramped, so test on smaller screens. If the text is too short, the next section may overlap with the float, so you may need to add a clear div after.

<div style="clear: both;"></div>

**Important:** Always add \`<div style="clear: both;"></div>\` after floated content to prevent the next section from overlapping.

## Float Right (Text Wraps Left)

<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="Float right" style="float: right; width: 45%; margin: 0 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

Same concept but mirrored. The image floats to the right and text flows on the left. Adjust the width and margins as needed. This pattern is used on the ROV project page for the BlueROV2 image. Alternating between float-left and float-right throughout a page can create a nice visual rhythm.

<div style="clear: both;"></div>

## Side-by-Side Images (image-row)

Wrap images in a \`<div class="image-row">\` to display them side by side. They flex to equal widths with a gap between them:

<div class="image-row">

![Image A](/files/projects/formatting-reference/placeholder-1.svg)
![Image B](/files/projects/formatting-reference/placeholder-2.svg)

</div>

## Image Grid (image-grid)

Use \`<div class="image-grid">\` for a responsive grid of images. They auto-fit into columns of minimum 200px. Images are cropped to a fixed height of 200px with object-cover:

<div class="image-grid">

![Image A](/files/projects/formatting-reference/placeholder-1.svg)
![Image B](/files/projects/formatting-reference/placeholder-2.svg)
![Image C](/files/projects/formatting-reference/placeholder-3.svg)
![Image D](/files/projects/formatting-reference/placeholder-4.svg)

</div>

## Custom Sized Image (Inline HTML)

You can set any width you want with inline HTML. Here's a 50% width centered image:

<img src="/files/projects/formatting-reference/placeholder-3.svg" alt="Custom 50% width" style="width: 50%; margin: 1.5rem auto; display: block; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

---

# Sections Rendered from Separate Fields

The following sections are NOT written in this content field. They are defined as separate fields on the project object and rendered automatically by ProjectDetail.tsx. Scroll down to see them in action:

1. **techStack** - Rendered as badges above the content. This page has: React, TypeScript, Markdown, Tailwind CSS, Framer Motion
2. **gallery** - Rendered as a clickable 2-column image grid below the content. Click an image to open it in a lightbox dialog.
3. **videoUrl** - Rendered as an embedded YouTube player. Accepts a YouTube embed URL like \`https://www.youtube.com/embed/VIDEO_ID\`
4. **files** - Rendered as a downloadable file list with auto-detected icons based on file extension. Supports: CAD files (.sldprt, .step, .stl), code (.py, .cpp, .ino), documents (.pdf), images, video, archives (.zip), and many more.
5. **challenges** - A separate markdown section with its own header
6. **keyFeatures** - A separate markdown section with its own header
7. **lessonsLearned** - A separate markdown section with its own header

---

# Visibility Controls

Control where a project appears using these boolean flags:

\`\`\`typescript
showInProjects: false,    // Hidden from projects grid
showInTerminal: false,    // Hidden from terminal sub-projects
showInRandomCommand: false, // Excluded from terminal 'random'
showInRandomButton: false,  // Excluded from projects page random button
\`\`\`

**Visibility combos:**
- All defaults (or all true): Visible everywhere
- \`showInProjects: false\`: Terminal-only (like the CLASSIFIED page)
- Both false: URL-only (like this reference page). Access via \`/#/projects/your-id\`
- \`showInRandomButton: true\` with \`showInProjects: false\`: Hidden from grid but can appear via random button (surprise!)

---

# Other Features

## contentLabel

Override the "Project Description" section header:

\`\`\`typescript
contentLabel: "Technical Details",  // Custom header text
contentLabel: "",                   // Hide the header entirely
// omit field                       // Default: "Project Description"
\`\`\`

## imagePosition

Control how the hero image is cropped on both the project card tile and the detail page:

\`\`\`typescript
imagePosition: "center bottom",  // Focus on the bottom of the image
imagePosition: "center 30%",     // Focus 30% from the top
imagePosition: "left center",    // Focus on the left side
// omit field                     // Default: center center
\`\`\`

## Internal Cross-References

Link to other projects using hash-router paths:

\`\`\`markdown
Check out my [FlyBox Redesign](#/projects/flybox-redesign) project.
\`\`\`

Result: Check out my [FlyBox Redesign](#/projects/flybox-redesign) project.

---

# Quick Copy-Paste Templates

## Minimal Project

\`\`\`typescript
{
  id: "my-project",
  title: "My New Project",
  description: "A short description for the card.",
  image: getProjectImage("my-project", "hero.jpg"),
  tags: ["Robotics", "Software"],
  content: \\\`Your markdown content here.\\\`,
},
\`\`\`

## Full Featured Project

\`\`\`typescript
{
  id: "my-project",
  title: "My New Project",
  description: "A short description for the card.",
  image: getProjectImage("my-project", "hero.jpg"),
  imagePosition: "center 40%",
  tags: ["Robotics", "Software"],
  contentLabel: "Technical Breakdown",
  techStack: ["Python", "ROS", "OpenCV", "Arduino"],
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  gallery: [
    { src: "/files/projects/my-project/photo1.jpg", alt: "Description" },
    { src: "/files/projects/my-project/photo2.jpg", alt: "Description" },
  ],
  files: [
    { name: "design.sldprt", url: "/files/projects/my-project/design.sldprt" },
    { name: "code.py", url: "/files/projects/my-project/code.py" },
  ],
  challenges: \\\`Markdown for the challenges section.\\\`,
  keyFeatures: \\\`Markdown for the key features section.\\\`,
  lessonsLearned: \\\`Markdown for the lessons learned section.\\\`,
  content: \\\`Your main markdown content here.\\\`,
},
\`\`\`

## Float Image Template

\`\`\`html
<img src="/files/projects/YOUR-PROJECT/image.jpg"
  alt="Description"
  style="float: left; width: 40%; margin: 0 1.5rem 1rem 0;
         border-radius: 8px;
         box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

Your text wraps here...

<div style="clear: both;"></div>
\`\`\`

## Side-by-Side Images Template

\`\`\`html
<div class="image-row">

![Alt text 1](/files/projects/YOUR-PROJECT/image1.jpg)
![Alt text 2](/files/projects/YOUR-PROJECT/image2.jpg)

</div>
\`\`\`

## Image Grid Template

\`\`\`html
<div class="image-grid">

![Alt 1](/files/projects/YOUR-PROJECT/img1.jpg)
![Alt 2](/files/projects/YOUR-PROJECT/img2.jpg)
![Alt 3](/files/projects/YOUR-PROJECT/img3.jpg)
![Alt 4](/files/projects/YOUR-PROJECT/img4.jpg)

</div>
\`\`\`

---

# Advanced Techniques & Creative Combinations

Everything below goes beyond the basics. These are creative ways to combine the available tools to build richer, more interesting project pages.

---

## Callout Boxes

You can create styled callout/info/warning boxes using inline HTML divs. These are great for drawing attention to important details:

<div style="background: hsl(142 76% 36% / 0.1); border-left: 4px solid hsl(142 76% 36%); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
<strong style="color: hsl(142 76% 36%);">SUCCESS</strong><br/>
The robot completed a full solve in under 2 seconds on the first real-hardware test.
</div>

<div style="background: hsl(48 96% 53% / 0.1); border-left: 4px solid hsl(48 96% 53%); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
<strong style="color: hsl(48 96% 53%);">NOTE</strong><br/>
This section requires the latest firmware version. Check the files section below for the update.
</div>

<div style="background: hsl(0 84% 60% / 0.1); border-left: 4px solid hsl(0 84% 60%); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
<strong style="color: hsl(0 84% 60%);">WARNING</strong><br/>
Do not exceed 12V input. The motor driver will release magic smoke.
</div>

<div style="background: hsl(24 100% 50% / 0.1); border-left: 4px solid hsl(24 100% 50%); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
<strong style="color: hsl(24 100% 50%);">TIP</strong><br/>
Combining a callout box right before a code block creates a nice "here's something important, and here's how to do it" flow.
</div>

---

## Stat/Metric Highlight Cards

Use inline HTML to create eye-catching stat blocks for key project numbers:

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0;">
<div style="flex: 1; min-width: 140px; background: hsl(24 100% 50% / 0.08); border: 1px solid hsl(24 100% 50% / 0.2); border-radius: 12px; padding: 1.25rem; text-align: center;">
<div style="font-size: 2.5rem; font-weight: bold; color: hsl(24 100% 50%);">1.8s</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Solve Time</div>
</div>
<div style="flex: 1; min-width: 140px; background: hsl(24 100% 50% / 0.08); border: 1px solid hsl(24 100% 50% / 0.2); border-radius: 12px; padding: 1.25rem; text-align: center;">
<div style="font-size: 2.5rem; font-weight: bold; color: hsl(24 100% 50%);">14</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Avg Moves</div>
</div>
<div style="flex: 1; min-width: 140px; background: hsl(24 100% 50% / 0.08); border: 1px solid hsl(24 100% 50% / 0.2); border-radius: 12px; padding: 1.25rem; text-align: center;">
<div style="font-size: 2.5rem; font-weight: bold; color: hsl(24 100% 50%);">6</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Servo Motors</div>
</div>
<div style="flex: 1; min-width: 140px; background: hsl(24 100% 50% / 0.08); border: 1px solid hsl(24 100% 50% / 0.2); border-radius: 12px; padding: 1.25rem; text-align: center;">
<div style="font-size: 2.5rem; font-weight: bold; color: hsl(24 100% 50%);">100%</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Success Rate</div>
</div>
</div>

---

## Collapsible Sections (Details/Summary)

HTML5 \`<details>\` elements work in markdown and let you create expandable/collapsible sections. Great for hiding verbose details without cluttering the page:

<details>
<summary style="cursor: pointer; font-weight: bold; color: hsl(24 100% 50%); margin-bottom: 0.5rem;">Click to expand: Full Bill of Materials</summary>

| Part | Qty | Source | Cost |
|---|---|---|---|
| MG996R Servo | 6 | Amazon | $42 |
| Arduino Mega | 1 | Adafruit | $46 |
| Pi Camera v2 | 1 | PiShop | $30 |
| 3D Printed Frame | 1 | In-house | $8 |
| Bearings (608ZZ) | 12 | McMaster | $24 |
| **Total** | | | **$150** |

</details>

<details>
<summary style="cursor: pointer; font-weight: bold; color: hsl(24 100% 50%); margin-bottom: 0.5rem;">Click to expand: Wiring Diagram Notes</summary>

The servo power rail must be separate from the logic power. Use a dedicated 6V 5A supply for the servos and power the Arduino via USB or a separate 5V regulator. Connect all grounds together. PWM signals go to pins 2-7 on the Mega.

\`\`\`
Arduino Mega Pin Layout:
  Pin 2  -> Servo 1 (Front face)
  Pin 3  -> Servo 2 (Back face)
  Pin 4  -> Servo 3 (Left face)
  Pin 5  -> Servo 4 (Right face)
  Pin 6  -> Servo 5 (Top face)
  Pin 7  -> Servo 6 (Bottom face)
  Pin 13 -> Status LED
\`\`\`

</details>

---

## Images with Captions

Wrap an image and a caption in a styled div for a cleaner presentation:

<div style="text-align: center; margin: 2rem 0;">
<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Captioned image" style="width: 60%; border-radius: 8px; box-shadow: 0 4px 12px -2px rgba(0,0,0,0.4);" />
<p style="font-size: 0.85rem; color: hsl(240 5% 65%); margin-top: 0.75rem; font-style: italic;">Figure 1: The prototype during initial testing. Note the cable management.</p>
</div>

---

## Before/After Comparison

Place two images side by side with labels for a visual comparison:

<div style="display: flex; gap: 1.5rem; margin: 1.5rem 0; flex-wrap: wrap;">
<div style="flex: 1; min-width: 250px; text-align: center;">
<div style="font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: hsl(0 84% 60%); margin-bottom: 0.5rem;">Before</div>
<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Before" style="width: 100%; border-radius: 8px; border: 2px solid hsl(0 84% 60% / 0.3); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.8rem; color: hsl(240 5% 65%); margin-top: 0.5rem;">Rev 1: Janky prototype held together with hope</p>
</div>
<div style="flex: 1; min-width: 250px; text-align: center;">
<div style="font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: hsl(142 76% 36%); margin-bottom: 0.5rem;">After</div>
<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="After" style="width: 100%; border-radius: 8px; border: 2px solid hsl(142 76% 36% / 0.3); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.8rem; color: hsl(240 5% 65%); margin-top: 0.5rem;">Rev 3: Properly machined and assembled</p>
</div>
</div>

---

## Timeline / Progress Steps

Create a visual timeline for project milestones or build steps:

<div style="border-left: 3px solid hsl(24 100% 50% / 0.4); margin: 1.5rem 0; padding-left: 1.5rem;">

<div style="position: relative; margin-bottom: 2rem;">
<div style="position: absolute; left: -2.05rem; top: 0.15rem; width: 14px; height: 14px; background: hsl(24 100% 50%); border-radius: 50%;"></div>

**Week 1-2: Research & Design**

Surveyed existing Rubik's cube solving robots. Studied Kociemba's algorithm and God's number. Settled on a 6-servo design with direct face rotation.
</div>

<div style="position: relative; margin-bottom: 2rem;">
<div style="position: absolute; left: -2.05rem; top: 0.15rem; width: 14px; height: 14px; background: hsl(24 100% 50%); border-radius: 50%;"></div>

**Week 3-4: Mechanical Build**

Designed the frame in SolidWorks. 3D printed all structural components. Assembled servo mounts with press-fit bearings.
</div>

<div style="position: relative; margin-bottom: 2rem;">
<div style="position: absolute; left: -2.05rem; top: 0.15rem; width: 14px; height: 14px; background: hsl(24 100% 50%); border-radius: 50%;"></div>

**Week 5-6: Software Integration**

Wrote the solving algorithm in Rust. Integrated Pi Camera for color detection using OpenCV. Achieved first successful autonomous solve.
</div>

<div style="position: relative; margin-bottom: 0.5rem;">
<div style="position: absolute; left: -2.05rem; top: 0.15rem; width: 14px; height: 14px; background: hsl(24 100% 50%); border-radius: 50%; box-shadow: 0 0 8px hsl(24 100% 50% / 0.6);"></div>

**Week 7+: Optimization & Testing**

Fine-tuning servo speeds, reducing solve time, and stress testing reliability. Current record: 1.8s average solve.
</div>

</div>

---

## Multi-Column Text Layout

Use CSS grid to create newspaper-style multi-column layouts for dense text:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0;">
<div>

**Mechanical Design**

The frame is built from 3D printed PLA with aluminum reinforcement at the servo mounts. Each face is driven by a single MG996R servo through a custom gear reduction. Bearings at every rotation point keep friction low and ensure smooth, repeatable motion.

</div>
<div>

**Software Architecture**

The solving pipeline runs on a Raspberry Pi 4. Color detection uses OpenCV with HSV thresholding. The solver implements a modified Kociemba two-phase algorithm compiled to native ARM code via Rust for maximum performance.

</div>
</div>

---

## Feature Cards

Create a grid of feature highlight cards:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0;">

<div style="background: hsl(240 10% 10%); border: 1px solid hsl(240 5% 20%); border-radius: 12px; padding: 1.25rem;">
<div style="font-size: 1.75rem; margin-bottom: 0.5rem;">&#9881;&#65039;</div>
<div style="font-weight: bold; margin-bottom: 0.25rem;">Modular Design</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Every component is individually replaceable. Swap a servo in under 5 minutes.</div>
</div>

<div style="background: hsl(240 10% 10%); border: 1px solid hsl(240 5% 20%); border-radius: 12px; padding: 1.25rem;">
<div style="font-size: 1.75rem; margin-bottom: 0.5rem;">&#128640;</div>
<div style="font-weight: bold; margin-bottom: 0.25rem;">Blazing Fast</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Rust-powered solver finds the optimal solution in under 50ms.</div>
</div>

<div style="background: hsl(240 10% 10%); border: 1px solid hsl(240 5% 20%); border-radius: 12px; padding: 1.25rem;">
<div style="font-size: 1.75rem; margin-bottom: 0.5rem;">&#128065;&#65039;</div>
<div style="font-weight: bold; margin-bottom: 0.25rem;">Computer Vision</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Automatic color detection via OpenCV. No manual input required.</div>
</div>

<div style="background: hsl(240 10% 10%); border: 1px solid hsl(240 5% 20%); border-radius: 12px; padding: 1.25rem;">
<div style="font-size: 1.75rem; margin-bottom: 0.5rem;">&#128295;</div>
<div style="font-weight: bold; margin-bottom: 0.25rem;">Open Source</div>
<div style="font-size: 0.85rem; opacity: 0.7;">Full CAD files, firmware, and solver code available for download.</div>
</div>

</div>

---

## Progress Bars

Visualize completion, skill levels, or any percentage-based data:

<div style="margin: 1.5rem 0;">

<div style="margin-bottom: 1rem;">
<div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;">
<span>Mechanical Design</span>
<span style="opacity: 0.6;">95%</span>
</div>
<div style="background: hsl(240 5% 15%); border-radius: 8px; height: 10px; overflow: hidden;">
<div style="background: hsl(24 100% 50%); height: 100%; width: 95%; border-radius: 8px;"></div>
</div>
</div>

<div style="margin-bottom: 1rem;">
<div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;">
<span>Software</span>
<span style="opacity: 0.6;">80%</span>
</div>
<div style="background: hsl(240 5% 15%); border-radius: 8px; height: 10px; overflow: hidden;">
<div style="background: hsl(24 100% 50%); height: 100%; width: 80%; border-radius: 8px;"></div>
</div>
</div>

<div style="margin-bottom: 1rem;">
<div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;">
<span>Testing & Validation</span>
<span style="opacity: 0.6;">60%</span>
</div>
<div style="background: hsl(240 5% 15%); border-radius: 8px; height: 10px; overflow: hidden;">
<div style="background: hsl(24 100% 50%); height: 100%; width: 60%; border-radius: 8px;"></div>
</div>
</div>

<div style="margin-bottom: 1rem;">
<div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;">
<span>Documentation</span>
<span style="opacity: 0.6;">30%</span>
</div>
<div style="background: hsl(240 5% 15%); border-radius: 8px; height: 10px; overflow: hidden;">
<div style="background: hsl(24 100% 50%); height: 100%; width: 30%; border-radius: 8px;"></div>
</div>
</div>

</div>

---

## Pull Quote

A large, styled quote for visual emphasis. Great for breaking up long text sections:

<div style="margin: 2.5rem 1rem; text-align: center;">
<div style="font-size: 1.6rem; font-style: italic; color: hsl(24 100% 50%); line-height: 1.5; max-width: 600px; margin: 0 auto;">"The robot solved it faster than I could scramble it. That's when I knew we had something."</div>
<div style="margin-top: 0.75rem; font-size: 0.85rem; opacity: 0.5;">- Florian, after the first successful test</div>
</div>

---

## Magazine-Style Alternating Layout

Alternate float directions with text to create a flowing, editorial feel. This is how professional portfolios often present build logs:

<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Step 1" style="float: left; width: 38%; margin: 0.5rem 1.5rem 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

### Step 1: Frame Assembly

The frame was the first thing to come together. I started with the 3D printed base plate and worked my way up, mounting each servo in sequence. The key challenge here was getting the alignment right. Even a fraction of a degree of misalignment in the servo mounts would cause the faces to bind during rotation. I ended up printing alignment jigs to ensure everything was perfectly square.

<div style="clear: both;"></div>

<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="Step 2" style="float: right; width: 38%; margin: 0.5rem 0 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

### Step 2: Electronics Integration

With the frame built, I moved onto wiring. Each servo needs its own PWM line from the Arduino, plus shared power and ground. I designed a custom breakout board to keep things clean. The camera mounts directly above the cube on a 3D printed arm, angled to see all visible faces in a single frame.

<div style="clear: both;"></div>

<img src="/files/projects/formatting-reference/placeholder-3.svg" alt="Step 3" style="float: left; width: 38%; margin: 0.5rem 1.5rem 1rem 0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

### Step 3: Software Bringup

The first test was just making each servo rotate 90 degrees reliably. Then came the color detection pipeline, then the solver integration. Each layer added complexity but also made the project feel more alive. The moment the robot made its first autonomous move was deeply satisfying.

<div style="clear: both;"></div>

---

## Inline Status Badges

Use colored spans to indicate status, difficulty, or categories inline with text:

The motor controller is <span style="background: hsl(142 76% 36% / 0.2); color: hsl(142 76% 36%); padding: 2px 8px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;">COMPLETE</span> and the firmware is <span style="background: hsl(48 96% 53% / 0.2); color: hsl(48 96% 53%); padding: 2px 8px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;">IN PROGRESS</span> while the housing redesign is <span style="background: hsl(0 84% 60% / 0.2); color: hsl(0 84% 60%); padding: 2px 8px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;">BLOCKED</span> waiting on new bearings.

---

## Labeled Image Grid (Gallery in Content)

Combine image-grid with captions for a more informative inline gallery:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="CAD Model" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.8rem; color: hsl(240 5% 65%); margin-top: 0.5rem;">CAD model in SolidWorks</p>
</div>
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="3D Print" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.8rem; color: hsl(240 5% 65%); margin-top: 0.5rem;">Fresh off the print bed</p>
</div>
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-3.svg" alt="Assembly" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.8rem; color: hsl(240 5% 65%); margin-top: 0.5rem;">Final assembly with all servos</p>
</div>
</div>

---

## Nested Blockquotes

Blockquotes inside blockquotes for layered commentary:

> **From the project log:**
>
> The first run was a disaster. The servos were jittering so badly the cube fell out.
>
> > **Update (2 days later):** Turns out the PWM frequency was wrong. Switched from 60Hz to 50Hz and the jitter disappeared completely. Sometimes the fix is embarrassingly simple.
> >
> > > **Note to self:** Always check the servo datasheet BEFORE wiring things up.

---

## Spec Table with Row Highlights

Use inline styles to highlight specific rows in a table:

<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
<thead>
<tr style="border-bottom: 2px solid hsl(240 5% 20%);">
<th style="text-align: left; padding: 0.75rem; font-weight: 600;">Specification</th>
<th style="text-align: left; padding: 0.75rem; font-weight: 600;">Target</th>
<th style="text-align: left; padding: 0.75rem; font-weight: 600;">Achieved</th>
<th style="text-align: left; padding: 0.75rem; font-weight: 600;">Status</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid hsl(240 5% 15%);">
<td style="padding: 0.75rem;">Solve Time</td>
<td style="padding: 0.75rem;">&lt; 3.0s</td>
<td style="padding: 0.75rem;">1.8s</td>
<td style="padding: 0.75rem;"><span style="color: hsl(142 76% 36%);">&#10003; Exceeded</span></td>
</tr>
<tr style="border-bottom: 1px solid hsl(240 5% 15%); background: hsl(24 100% 50% / 0.05);">
<td style="padding: 0.75rem;">Solve Rate</td>
<td style="padding: 0.75rem;">99%</td>
<td style="padding: 0.75rem;">100%</td>
<td style="padding: 0.75rem;"><span style="color: hsl(142 76% 36%);">&#10003; Exceeded</span></td>
</tr>
<tr style="border-bottom: 1px solid hsl(240 5% 15%);">
<td style="padding: 0.75rem;">Weight</td>
<td style="padding: 0.75rem;">&lt; 2kg</td>
<td style="padding: 0.75rem;">1.4kg</td>
<td style="padding: 0.75rem;"><span style="color: hsl(142 76% 36%);">&#10003; Met</span></td>
</tr>
<tr style="border-bottom: 1px solid hsl(240 5% 15%); background: hsl(24 100% 50% / 0.05);">
<td style="padding: 0.75rem;">Cost</td>
<td style="padding: 0.75rem;">&lt; $200</td>
<td style="padding: 0.75rem;">$150</td>
<td style="padding: 0.75rem;"><span style="color: hsl(142 76% 36%);">&#10003; Under budget</span></td>
</tr>
<tr>
<td style="padding: 0.75rem;">Noise Level</td>
<td style="padding: 0.75rem;">&lt; 60dB</td>
<td style="padding: 0.75rem;">72dB</td>
<td style="padding: 0.75rem;"><span style="color: hsl(0 84% 60%);">&#10007; Needs work</span></td>
</tr>
</tbody>
</table>

---

## Code + Explanation Side-by-Side

Float a code concept next to its explanation:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0; align-items: start;">
<div>

\`\`\`python
def detect_colors(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    colors = {}
    for region in FACE_REGIONS:
        roi = hsv[region.y:region.y+region.h,
                   region.x:region.x+region.w]
        dominant = get_dominant_color(roi)
        colors[region.name] = dominant

    return colors
\`\`\`

</div>
<div>

**How Color Detection Works**

The camera captures a frame, which gets converted to HSV color space (better for color detection than RGB). For each of the 9 squares on a visible face, we extract a small region of interest and find the dominant color using histogram analysis.

The key insight was using HSV instead of RGB. Lighting changes affect the V (value) channel but leave H (hue) relatively stable, making detection much more robust.

</div>
</div>

---

## Three-Column Image Layout

You're not limited to two columns. Use CSS grid for three or more:

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Rev 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.75rem; opacity: 0.6; margin-top: 0.4rem;">Rev 1</p>
</div>
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="Rev 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.75rem; opacity: 0.6; margin-top: 0.4rem;">Rev 2</p>
</div>
<div style="text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-3.svg" alt="Rev 3" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
<p style="font-size: 0.75rem; opacity: 0.6; margin-top: 0.4rem;">Rev 3 (Final)</p>
</div>
</div>

---

## Combination: Callout + Code + Image

Here's how these pieces work together in a realistic scenario. This is the kind of flow you'd use in a real project writeup:

<div style="background: hsl(48 96% 53% / 0.1); border-left: 4px solid hsl(48 96% 53%); padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0;">
<strong style="color: hsl(48 96% 53%);">KEY DISCOVERY</strong><br/>
The servo timing was off by 2ms, causing a cascade of missed moves. The fix was a single line change.
</div>

\`\`\`rust
// Before (broken): fixed 20ms delay
thread::sleep(Duration::from_millis(20));

// After (working): calculate based on rotation angle
let delay = (angle as f64 / 90.0 * 25.0) as u64;
thread::sleep(Duration::from_millis(delay));
\`\`\`

<div style="display: flex; gap: 1.5rem; margin: 1.5rem 0; flex-wrap: wrap;">
<div style="flex: 1; min-width: 250px; text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-1.svg" alt="Before fix" style="width: 100%; border-radius: 8px; border: 2px solid hsl(0 84% 60% / 0.3);" />
<p style="font-size: 0.8rem; color: hsl(0 84% 60%); margin-top: 0.5rem;">Before: Cube misaligned after move sequence</p>
</div>
<div style="flex: 1; min-width: 250px; text-align: center;">
<img src="/files/projects/formatting-reference/placeholder-2.svg" alt="After fix" style="width: 100%; border-radius: 8px; border: 2px solid hsl(142 76% 36% / 0.3);" />
<p style="font-size: 0.8rem; color: hsl(142 76% 36%); margin-top: 0.5rem;">After: Clean, precise rotations every time</p>
</div>
</div>

That single change dropped the error rate from 15% to 0%. Sometimes the best optimizations are the simplest ones.

---

*End of formatting reference. If you think of a layout or style that isn't covered here, it's probably possible with inline HTML and CSS. Go wild.*`,
  },
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
