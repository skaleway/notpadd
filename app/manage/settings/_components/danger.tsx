"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";

const Danger = ({ username }: { username: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const text = `notpadd/${username}`;

  return (
    <div className="border rounded-lg dark:bg-[#232323] dark:border-neutral-700 overflow-hidden">
      <div className="text- font-medium">
        <h1 className=" border-b py-3 px-5 dark:border-neutral-700 text-base">
          DANGER ZONE
        </h1>
      </div>
      <div className="py-3 px-5">
        <div className="border border-[#541C15] py-3 px-5 bg-[#1D1412] rounded-md flex gap-4">
          <Button size="smIcon" className="bg-[#F16A50] w-6 h-6 min-w-6 ">
            <TriangleAlert className="w-4 h-4" fill="#1D1412" />
          </Button>
          <div className="space-y-3">
            <p className="text-sm text-neutral-400 flex flex-col gap-3">
              <span className="text-neutral-50">
                Request for account deletion
              </span>
              Deleting your account is permanent and cannot be undone. Your data
              will be deleted within 30 days, except if you change your mind and
              contact us to cancel that.
            </p>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <button className="w-fit text-xs border border-red-500 bg-red-900 py-1 px-2  cursor-pointer rounded-sm outline-none">
                  Request Deletion
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] lg:w-[500px]">
                <DialogHeader className="text-center ">
                  <DialogTitle className="text-center">
                    You are about to delete your account
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    This action that you&apos;re about to carry out can&apos;t
                    be ondone by you. Type{" "}
                    <span className="text-rose-500 select-none">{text}</span>{" "}
                    below{" "}
                  </DialogDescription>
                </DialogHeader>
                <Input />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danger;
