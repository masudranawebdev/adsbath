import { Hammer } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="h-screen">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <Hammer size={72} />
        <h1 className="text-4xl font-bold leading-tight">
          Under Construction 🚧
        </h1>
        <p className="text-center text-muted-foreground">
          Our new page is currently being built. <br />
          Exciting updates are on the way for AdsBath!
        </p>
      </div>
    </div>
  );
}

// import { PlaneTakeoff } from "lucide-react";

// export default function ComingSoon() {
//   return (
//     <div className="h-svh">
//       <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
//         <PlaneTakeoff size={72} />
//         <h1 className="text-4xl font-bold leading-tight">Coming Soon 👀</h1>
//         <p className="text-center text-muted-foreground">
//           This page has not been created yet. <br />
//           Stay tuned though!
//         </p>
//       </div>
//     </div>
//   );
// }
