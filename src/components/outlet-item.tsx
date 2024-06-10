import { Outlet } from "@/types";
import { Badge } from "./ui/badge";
import { Clock4, MapPin, Star } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import calcRating from "@/lib/calc-rating";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useAddRating from "@/hooks/api/add-rating";

type Props = {
  outlet: Outlet;
};

const formSchema = z.object({
  rating: z.number().min(1).max(5),
  foodOutletId: z.number().nonnegative(),
});

const OutletItem = ({ outlet }: Props) => {
  const { mutate } = useAddRating();

  const calculatedRating = calcRating(outlet.ratings);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodOutletId: outlet.id,
      rating: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    mutate(values);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-72 relative sm:w-80 md:w-64 min-h-56 m-2 bg-white shadow hover:shadow-lg rounded-md overflow-hidden cursor-pointer">
          <div className="absolute right-1 top-1 flex">
            {Array.from({ length: Math.floor(calculatedRating) }, (_, i) => (
              <Star className="text-yellow-400 w-4" key={i} />
            ))}
          </div>
          <div>
            <img
              src={outlet.imageUrl}
              alt={outlet.name}
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="p-4">
            <strong className="text-left">{outlet.name}</strong>
            <div className="flex items-center justify-between">
              <div className="text-slate-700 text-sm flex items-center justify-between">
                <MapPin className="w-4 text-amber-700" />
                <span className="pl-2">{outlet.address}</span>
              </div>
              <Badge variant="amber">{outlet.cuisineType}</Badge>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <DialogTitle>
              <strong className="text-lg">{outlet.name}</strong>
            </DialogTitle>
            <div className="flex">
              {Array.from({ length: Math.floor(calculatedRating) }, (_, i) => (
                <Star className="text-amber-400 w-4" key={i} />
              ))}
            </div>
          </div>
        </DialogHeader>
        <img
          src={outlet.imageUrl}
          alt={outlet.name}
          className="w-full h-60 object-cover"
        />
        <DialogDescription>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-700 text-sm flex items-center">
                <MapPin className="w-4 text-amber-700" />
                <span className="pl-2">{outlet.address}</span>
              </div>
              <div className="text-slate-700 text-sm flex items-center">
                <Clock4 className="w-4 text-amber-700" />
                <span className="pl-2">{outlet.openingHours}</span>
              </div>
            </div>
            <Badge variant="amber">{outlet.cuisineType}</Badge>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-x-4 flex items-start">
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(event) =>
                            field.onChange(Number(event.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Add rating</Button>
              </div>
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default OutletItem;
