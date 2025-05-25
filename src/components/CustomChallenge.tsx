import React from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    challenge: z.string().min(2, {
        message: "Challenge must be at least 2 characters.",
    }),
})

const CustomChallenge: React.FC = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            challenge: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (

        <div className="flex bg-gray-100 flex-col w-full mx-auto items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-red border-dashed">
                Custom Challenge
            </h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="challenge"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Challenge</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your challenge..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the challenge you want to plan
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </div>
    )
};

export default CustomChallenge;
