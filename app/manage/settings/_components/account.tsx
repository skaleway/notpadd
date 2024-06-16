import { Input } from "@/components/ui/input";
import React from "react";

const Account = ({ username, email }: { email: string; username: string }) => {
  return (
    <div className="border rounded-lg dark:bg-[#232323] dark:border-neutral-700 overflow-hidden">
      <div className="text- font-medium">
        <h1 className=" border-b py-3 px-5 dark:border-neutral-700 text-base">
          Account settings
        </h1>
      </div>

      <div className="py-3 px-5 space-y-3">
        <div className="flex items-center w-full">
          <div className="flex-1 ">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Username
            </p>
          </div>
          <div className="flex-[1.3] ">
            <Input
              placeholder={username}
              className="bg-muted border-neutral-300 dark:border-neutral-700"
              disabled
            />
          </div>
        </div>
        <div className="flex items-center w-full ">
          <div className="flex-1">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Email
            </p>
          </div>
          <div className="flex-[1.3]">
            <Input
              disabled
              placeholder={email}
              className="bg-muted border-neutral-300  dark:border-neutral-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
