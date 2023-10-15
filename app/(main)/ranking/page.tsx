 "use client"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import LobbyItem from "@/components/LobbyItem";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



 

const lobbyData = [
  { name: "Lobby 1", current: 1, max: 2 },
  { name: "Lobby 2" },
  { name: "Lobby 3" },
  { name: "Lobby 4" },
  { name: "Lobby 5" },
  { name: "Lobby 6" },
  { name: "Lobby 7" },
  { name: "Lobby 8" },
  { name: "Lobby 9" },
  { name: "Lobby 10" },
  { name: "Lobby 11" },
  { name: "Lobby 12" },
  { name: "Lobby 13" },
  { name: "Lobby 14" },
  { name: "Lobby 15" },
];


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
 

  
   
 

 
 const RankingPage = () => {
  
 return (
    <div className="h-[60dvh] overflow-y-scroll rounded-xl bg-zinc-800 p-5 pt-2">
      {lobbyData.map((data, index) => (
        <LobbyItem
          key={index}
          name={data.name}
          current={data.current}
          max={data.max}
        ></LobbyItem>
      ))}
         <div
        className="grid h-40 content-center justify-items-center rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5"
       
      >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="text-black" variant="outline">Make Lobby</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-zinc-800">
                <AlertDialogHeader>
                  <AlertDialogTitle>Make Lobby:</AlertDialogTitle>
                </AlertDialogHeader>
                <Input type="name" placeholder="Lobby Name" />
                <Textarea
              className="h-32-xl border border-neutral-200 bg-zinc-800 text-neutral-200"
              placeholder="<Paste job description here. If you’re interested in general feedback, leave this empty.>"
            />
                <AlertDialogFooter>
                  <AlertDialogCancel className="text-black"  >Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        
        
      </div>
    </div>
  );
};


export default RankingPage;
