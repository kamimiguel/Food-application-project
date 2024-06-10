import { baseUrl } from "@/config";
import { Rating } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";

type RequestType = {
  name: string;
  address: string;
  cuisineType: string;
  openingHours: string;
  imageUrl: string;
};

async function createOutlet(data: RequestType) {
  const API_URL = `${baseUrl}/api/outlets`;
  const { data: response } = await axios.post<Rating>(API_URL, data);
  return response;
}

function useCreateOutlet() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: createOutlet,
    onSuccess: (data) => {
      console.log(data);
      toast.success("A new food outlet has been added!");
      window.location.href = "http://localhost:5173/";
    },
  });

  return { mutate, isSuccess, isError };
}

export default useCreateOutlet;
