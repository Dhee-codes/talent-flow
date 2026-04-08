import graphics from "../../assets/images/temp/graphics.png";
import uiuxImg from "../../assets/images/temp/uiux.png";

const courses = [
  { id: 1, title: "UI/UX", image: uiuxImg },
  { id: 2, title: "Graphics", image: graphics },
  { id: 3, title: "UI/UX", image: uiuxImg },
  { id: 4, title: "Graphics", image: graphics },
  { id: 5, title: "UI/UX", image: uiuxImg },
];

export default function PopularCourses() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Our popular courses</h2>
        <a href="#" style={styles.seeAll}>
          See All &rsaquo;
        </a>
      </div>

      <div style={styles.grid}>
        {courses.map((course) => (
          <div key={course.id} style={styles.card}>
            <img src={course.image} alt={course.title} style={styles.image} />
            <p style={styles.title}>{course.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#eef3fb",
    padding: "94px 20px",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111",
    margin: 0,
  },
  seeAll: {
    fontSize: "14px",
    color: "#555",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "12px",
    marginTop: "12px",
    overflowX: "auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "10px 10px 10px 10px",
    minWidth: "150px",
    flex: "0 0 auto",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
  },
  title: {
    marginTop: "10px",
    marginBottom: "4px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#222",
  },
} as const;