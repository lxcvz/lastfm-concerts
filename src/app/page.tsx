"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { getUserInformation } from "@/api/getUserInformation";
import { AdsBanner } from "@/components/AdsBanner";

const formSchema = z.object({
  grid: z.string(),
  period: z.string(),
  username: z.string(),
});

export default function Home() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grid: "25",
      period: "1month",
    },
  });

  const handleSubmit = async ({
    grid,
    period,
    username,
  }: z.infer<typeof formSchema>) => {
    const userInformation = await getUserInformation(username);

    if (!userInformation) {
      return form.setError("username", {
        type: "manual",
        message: "Failed to fetch lastfm account",
      });
    }

    if (userInformation.error === 6) {
      return form.setError("username", {
        type: "manual",
        message: "Account not found",
      });
    }

    return router.push(`/collage/${username}?grid=${grid}&period=${period}`);
  };

  return (
    <main className="px-8 py-28 w-full h-screen content-center">
      <div className="bg-black">
        <AdsBanner />
      </div>

      <div className="flex w-full flex-col text-center items-center gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-red-500 via-red-900 to-black text-transparent bg-clip-text">
              All my live
            </span>

            <span> gigs</span>
          </h1>

          <span>
            Create a collage of your top artists based on Last.fm and
            personalize it with how many times you&apos;ve seen them live!
          </span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="grid"
                render={({ field }) => {
                  return (
                    <FormItem className="w-full">
                      <Select onValueChange={field.onChange} defaultValue="25">
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="9">3x3</SelectItem>
                            <SelectItem value="16">4x4</SelectItem>
                            <SelectItem value="25">5x5</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="period"
                render={({ field }) => {
                  return (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue="1month"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="7day">7 days</SelectItem>
                            <SelectItem value="1month">1 month</SelectItem>
                            <SelectItem value="3month">3 months</SelectItem>
                            <SelectItem value="6month">6 months</SelectItem>
                            <SelectItem value="12month">12 months</SelectItem>
                            <SelectItem value="overall">Overall</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Lastfm username" {...field} />
                    </FormControl>
                    {form.formState.errors.username && (
                      <FormMessage>
                        {form.formState.errors.username.message}
                      </FormMessage>
                    )}
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
