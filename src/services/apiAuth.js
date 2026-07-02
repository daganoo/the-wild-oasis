export async function signup() {
  return { user: null };
}

export async function login() {
  return { user: null };
}

export async function getCurrentUser() {
  return {
    id: "mock-user-id",
    email: "admin@gmail.com",
    role: "authenticated",
    aud: "authenticated",
    user_metadata: {
      fullName: "Admin",
      avatar: "",
    },
  };
}

export async function logout() {
  return null;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  return {
    user: {
      id: "mock-user-id",
      email: "admin@gmail.com",
      role: "authenticated",
      aud: "authenticated",
      user_metadata: {
        fullName: fullName || "Admin",
        avatar: avatar || "",
      },
    },
  };
}
