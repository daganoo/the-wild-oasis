import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const mockUser = {
  id: "mock-user-id",
  email: "admin@gmail.com",
  role: "authenticated",
  user_metadata: {
    fullName: "Admin",
    avatar: "",
  },
};

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: () => Promise.resolve(),
    onSuccess: () => {
      queryClient.setQueryData(["user"], mockUser);
      navigate("/dashboard", { replace: true });
    },
  });

  return { login, isLoading };
}
