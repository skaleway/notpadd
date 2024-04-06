import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@prisma/client";
import { ArrowRight, DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

const LatestProject = ({ projects }: { projects: Project[] }) => {
  const pros = Array.from({ length: 4 });
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Latest projects</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {pros.map((_, index) => (
          <Card x-chunk="dashboard-01-chunk-0" key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,221.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="/manage/projects"
          className="hover:underline flex items-center gap-1 text-muted-foreground text-sm"
        >
          See more <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default LatestProject;
