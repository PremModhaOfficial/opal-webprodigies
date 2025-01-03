import { onAuthenticateUser } from "@/actions/user";
import { verifyAccsesToWorkspace } from "@/actions/workspace";
import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";

type props = {
  params: {
    workSpaceId: string;
  }
  children: ReactNode
}


const Layout = async ({ params: { workSpaceId }, children }: props) => {
  const auth = await onAuthenticateUser()

  if (!auth.user?.workspace?.length) redirect('/auth/sign-in/')

  const hasAccses = await verifyAccsesToWorkspace(workSpaceId)
  if (hasAccses.status !== 200) redirect(`/auth/dashboard/${auth.user?.workspace[0].id}`)

  if (!hasAccses.data?.workspace) return null

  const query = new QueryClient()
  await query.prefetchQuery({
    queryKey: ['user-videos'],
    queryFn: () => getAllUserVideos(workSpaceId)
  })
  await query.prefetchQuery({
    queryKey: ['user-workspace'],
    queryFn: () => getWorkspaceFolders(workSpaceId)
  })
  await query.prefetchQuery({
    queryKey: ['user-notifications'],
    queryFn: () => getWorkspaces()
  })
  await query.prefetchQuery({
    queryKey: ['workspace-folders'],
    queryFn: () => getNotifications()
  })



  return <h1>layout</h1>

}


export default Layout
