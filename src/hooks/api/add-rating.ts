import { baseUrl } from "@/config";
import { Rating } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";

type RequestType = {
  rating: number;
  foodOutletId: number;
};

async function createRating(data: RequestType) {
  const API_URL = `${baseUrl}/api/ratings`;
  const { data: response } = await axios.post<Rating>(API_URL, data);
  return response;
}

function useAddRating() {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: createRating,
    onSuccess: (data) => {
      console.log(data);
      toast.success("A new rating has been added!");
    },
  });

  return { mutate, isSuccess, isError };
}

export default useAddRating;
