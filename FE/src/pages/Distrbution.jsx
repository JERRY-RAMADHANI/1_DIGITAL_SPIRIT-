import Navbar from "@/components/organism/Navbar";
import kbs from "@/assets/images/peta.png";
import kbsMapping from "@/assets/images/peta_mapping.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
//   CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Distribution() {
  const [isMapping, setIsMapping] = useState(true);
  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <Card className="mt-24 w-[80%]">
          <CardHeader>
            <CardTitle>Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" px-8 flex flex-col gap-4 items-center">
              <img src={isMapping ? kbs : kbsMapping} alt="Map KBS" />
              <Button
                className="w-fit h-8 hover:cursor-pointer text-slate-950 hover:text-white bg-white hover:bg-slate-950 border-2 border-slate-950 justify-self-end"
                asChild
                onClick={() => setIsMapping(!isMapping)}
              >
                <p>{isMapping ? "Lihat Map Asli" : "Lihat Sector"}</p>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
