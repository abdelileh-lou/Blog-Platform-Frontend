import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import EditPostPage from "./pages/EditPostPage";
import PostPage from "./pages/PostPage";
import CategoriesPage from "./pages/CategoriesPage";
import TagsPage from "./pages/TagsPage";
import DraftsPage from "./pages/DraftsPage";
import LoginPage from "./pages/LoginPage";
import BlogPlatformHomepage from "./pages/BlogPlatformHomepage"; // ✅ Landing page
import { AuthProvider, useAuth } from "./components/AuthContext";

// ✅ Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// ✅ Main AppContent
function AppContent() {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  return (
    <>
      {/* ✅ Show NavBar everywhere except on "/" */}
      {location.pathname !== "/" && (
        <NavBar
          isAuthenticated={isAuthenticated}
          userProfile={
            user
              ? {
                  name: user.name,
                  avatar: undefined, // Add avatar later if needed
                }
              : undefined
          }
          onLogout={logout}
        />
      )}

      {/* ✅ Fullscreen layout for "/" and container for others */}
      <main
        className={
          location.pathname === "/"
            ? "" // landing page → no container
            : "container mx-auto py-6"
        }
      >
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<BlogPlatformHomepage />} />

          {/* Blog content */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Posts */}
          <Route
            path="/posts/new"
            element={
              <ProtectedRoute>
                <EditPostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={<PostPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/posts/:id/edit"
            element={
              <ProtectedRoute>
                <EditPostPage />
              </ProtectedRoute>
            }
          />

          {/* Categories & Tags */}
          <Route
            path="/categories"
            element={<CategoriesPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/tags"
            element={<TagsPage isAuthenticated={isAuthenticated} />}
          />

          {/* Drafts */}
          <Route
            path="/posts/drafts"
            element={
              <ProtectedRoute>
                <DraftsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

// ✅ Root App
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
