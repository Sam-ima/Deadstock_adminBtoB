import { useNavigate } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internal";
import { NAVIGATION, demoTheme, BRANDING } from "./constants";
import { useEffect, useMemo, useState } from "react";

function AppWrapper({ children, window }) {
  // ✅ Default to /dashboard if no saved path
  const savedPath = localStorage.getItem("lastPath") || "/dashboard";
  const router = useDemoRouter(savedPath);
  const navigate = useNavigate();

  const [session, setSession] = useState({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });

        // ✅ Redirect to /dashboard after sign in
        router.push("/dashboard");
      },
      signOut: () => {
        setSession(null);
        localStorage.removeItem("lastPath");
        navigate("/login");
      },
    };
  }, [navigate, router]);

  // ✅ Always save last visited path
  useEffect(() => {
    if (router?.pathname) {
      localStorage.setItem("lastPath", router.pathname);
    }
  }, [router?.pathname]);

  const handleNavigationClick = (navItem) => {
    if (navItem.action === "logout") {
      authentication.signOut();
    } else {
      router.push(navItem.path);
    }
  };

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={BRANDING}
      onNavigationItemClick={handleNavigationClick}
    >
      {children(router)}
    </AppProvider>
  );
}

export default AppWrapper;
