"use client"
import React from "react"

import { Title } from "@/components/typography/title"
import { DataTable } from "@/components/ui/data-table/data-table"
import { useLeaderboard, useUserPoints } from "./use-leaderboard"
import { useTable } from "./use-table"

export function Leaderboard() {
  const [{ page, pageSize }, setPageDetails] = React.useState<PageDetails>({
    page: 1,
    pageSize: 10,
  })
  const leaderboardQuery = useLeaderboard({
    filters: {
      skip: (page - 1) * pageSize,
      first: pageSize,
    },
  })

  const userPointsQuery = useUserPoints()
  const currentUser = userPointsQuery.data
  const data = React.useMemo(() => {
    if (leaderboardQuery.isLoading) return []
    return leaderboardQuery.data?.leaderboard ?? []
  }, [leaderboardQuery.dataUpdatedAt])
  const userData = React.useMemo(() => {
    if (userPointsQuery.isLoading) return []
    return [userPointsQuery.data] ?? []
  }, [userPointsQuery.dataUpdatedAt])

  const userTable = useTable({
    //@ts-ignore
    data: userData,
  })

  const table = useTable({
    //@ts-ignore
    data: data,
  })

  return (
    <div className="mt-16 !text-white">
      <Title variant={"title1"} className="mb-5">
        Your points
      </Title>
      <DataTable
        skeletonRows={1}
        table={userTable}
        isError={!!userPointsQuery.error}
        isLoading={userPointsQuery.isLoading}
        tableRowClasses="text-white"
        isRowHighlighted={(row) => row.account === currentUser?.account}
      />
      <Title variant={"title1"} className="mt-10 mb-5">
        Leaderboard
      </Title>
      <DataTable
        skeletonRows={10}
        table={table}
        isError={!!leaderboardQuery.error}
        isLoading={leaderboardQuery.isLoading}
        pagination={{
          onPageChange: setPageDetails,
          page,
          pageSize,
          count: leaderboardQuery.data?.leaderboard_length ?? 0,
        }}
        tableRowClasses="text-white"
      />
    </div>
  )
}
