import { Suspense } from "react";
import Loading from "./loading";

export default function MyPlanLayout({ children }: LayoutProps<"/">) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
