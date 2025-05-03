export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'machine-learning' | 'data-analysis' | 'visualization';
  categoryLabel: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Customer Churn Prediction",
    "description": "Built a predictive model using logistic regression and decision trees to identify potential churners. Delivered actionable insights that can help improve customer retention by targeting at-risk users.",
    "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "technologies": ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    "demoUrl": "https://example.com/churn-demo",
    "repoUrl": "https://github.com/yourusername/churn-prediction"
  },  
  {
    "id": 2,
    "title": "XAUUSD Price Prediction with ML Dashboard",
    "description": "Designed a machine learning model to predict gold (XAUUSD) prices using technical indicators and time-series analysis. Integrated a backtesting module and deployed an interactive dashboard with Streamlit.",
    "image": "https://images.pexels.com/photos/5553727/pexels-photo-5553727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "category": "machine-learning",
    "categoryLabel": "Machine Learning",
    "technologies": ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Matplotlib"],
    "demoUrl": "https://example.com/xauusd-demo",
    "repoUrl": "https://github.com/rajesh7358-pattu/xauusd-price-prediction"
  },
  {
    "id": 3,
    "title": "Conversational NLP to SQL Agent",
    "description": "Developed an intelligent NLP-based assistant that translates natural language queries into SQL statements, enabling human-like database interactions and improving accessibility for non-technical users.",
    "image": "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "category": "data-analysis",
    "categoryLabel": "Data Analysis",
    "technologies": ["Python", "NLTK", "spaCy", "SQL", "LangChain"],
    "demoUrl": "https://example.com/nlp-sql-demo",
    "repoUrl": "https://github.com/yourusername/nlp-to-sql-agent"
  },  
  {
    id: 4,
    title: "Real-time Customer Segmentation",
    description: "Implemented unsupervised learning algorithms to identify customer segments, boosting marketing ROI by 42%.",
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "machine-learning",
    categoryLabel: "Machine Learning",
    technologies: ["Python", "K-means", "PCA", "Plotly", "Dash"],
    demoUrl: "https://example.com/demo4",
    repoUrl: "https://github.com/example/project4"
  },
  {
    id: 5,
    title: "Interactive Climate Change Visualization",
    description: "Designed an award-winning interactive data visualization dashboard showing climate change impact by region.",
    image: "https://images.pexels.com/photos/4312149/pexels-photo-4312149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "visualization",
    categoryLabel: "Visualization",
    technologies: ["D3.js", "JavaScript", "GeoJSON", "Mapbox"],
    demoUrl: "https://example.com/demo5",
    repoUrl: "https://github.com/example/project5"
  },
  {
    id: 6,
    title: "Supply Chain Optimization Model",
    description: "Developed predictive models to optimize logistics and reduce transportation costs by 23% for a global retailer.",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "data-analysis",
    categoryLabel: "Data Analysis",
    technologies: ["Python", "Linear Programming", "Gurobi", "Pandas"],
    demoUrl: "https://example.com/demo6",
    repoUrl: "https://github.com/example/project6"
  }
];