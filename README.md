
# 🔄 Unit-Converter-Application

A modern, fast, and responsive web application designed to convert units across Length, Weight, and Temperature categories with real-time accuracy and a persistent history log.

---

## 🚀 Live Deployment

**View the live project:** [https://unit-converte.netlify.app/](https://unit-converte.netlify.app/)

---

## 👥 Project Team & Role Assignments

| Student Name (As per LMS) | Student ID | Primary Role |
| --- | --- | --- |
| **A.B Dasun Niroshana** | ITBNM-2313-0020 | **DevOps Engineer & Version Control** |
| **K.R. Waruni Samanmaie Dissanayake** | ITBNM-2313-0022 | **Frontend Developer & UI Designer** |
| **S.R. Udara Welathanthri** | ITBNM-2313-0083 | **Backend Logic Developer** |

---

## ✅ Individual Contributions

### **1. A.B Dasun Niroshana — DevOps Engineer & Version Control**

* **Deployment Pipeline:** Managed the CI/CD workflow and successfully deployed the application on Netlify for high availability.
* **Version Control:** Architected the GitHub repository structure, managed branching strategies, and handled all commits and pull requests.
* **Infrastructure & SEO:** Configured the HTML5 skeleton with optimized metadata, viewport tags for mobile responsiveness, and ensured proper document flow.
* **Project Orchestration:** Oversaw the final build process and integration of all components into a stable production environment.

### **2. K.R. Waruni Samanmaie Dissanayake — Frontend Developer & UI/UX Design**

* **Visual Architecture:** Developed a professional UI using modern CSS3, featuring a vibrant linear gradient palette and clean typography.
* **Responsive Layout:** Engineered a fully fluid design using Flexbox and Grid, ensuring the app works perfectly on Mobile, Tablet, and Desktop.
* **Component Styling:** Designed interactive UI elements including glassmorphic card containers, custom input fields, and smooth hover animations.
* **User Experience:** Implemented the tab-based navigation system to ensure a seamless transition between different conversion categories.

### **3. S.R. Udara Welathanthri — Backend Logic Developer**

* **Core Conversion Engine:** Engineered the mathematical algorithms and logic for unit scaling across Length, Weight, and Temperature.
* **Functional Programming:** Developed complex JavaScript functions to handle , , and  formulas accurately.
* **Data Management:** Created a dynamic history system using array-based logic to store and display the last 10 conversions with real-time timestamps.
* **Dynamic Interactivity:** Built the "Smart Swap" and "Auto-Calculate" features, ensuring instant DOM updates without page reloads.

---

## 🛠 Key Features

* **Real-Time Conversion:** Updates results instantly as you type.
* **Multi-Category Support:** Handles Length (m, km, mi, etc.), Weight (kg, g, lb, etc.), and Temperature (°C, °F, K).
* **Smart Swap:** One-click functionality to reverse units instantly.
* **History Log:** Automatically keeps track of recent conversions for quick reference.
* **Optimized Performance:** Lightweight code for fast loading and touch-friendly mobile usage.

---

## 💻 Tech Stack

* **HTML5:** Semantic markup and accessibility.
* **CSS3:** Custom styling, Flexbox, and Animations.
* **JavaScript (ES6+):** DOM manipulation and core calculation logic.

---

## 📂 Repository Structure

```text
Unit-Converter-Application/
├── index.html           # Main HTML file
├── styles/              # CSS files
├── scripts/             # JS files
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── .dockerignore        # Docker ignore file
├── .gitignore           # Git ignored files
└── README.md            # Project documentation

```
## ⚙️ Installation & Usage

1. Clone the repository:
```bash
git clone https://github.com/Dniroshana/Unit-Converter-Application.git

```
## 🚀 Running the Application

There are two primary ways to run this application: using standard Docker commands or using Docker Compose.

### Option 1: Using Docker CLI (Manual)

1. **Build the Image:**
Create the Docker image by running the following command in your terminal:
```bash
docker build -t unit-converter-app .

```


2. **Run the Container:**
Start the container mapping your local port 8080 to the container's port 80:
```bash
docker run -d -p 8080:80 --name unit-converter-container unit-converter-app

```


The application will be accessible at: `http://localhost:8080`
3. **Stopping the Container:**
When you are finished, stop and remove the container:
```bash
docker stop unit-converter-container
docker rm unit-converter-container

```



### Option 2: Using Docker Compose (Recommended)

Docker Compose simplifies the build and run process into a single command:

```bash
docker-compose up --build

```

Access the application at: `http://localhost:8080`

---

## ⚙️ Configuration

* **Environment Variables:** This is a static web application. It does not require any environment variables to function, as all configuration is handled directly within the browser or the served static files.

---


