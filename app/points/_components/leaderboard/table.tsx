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
    },
  })

  const useUserPointsQuery = useUserPoints()
  const currentUser = useUserPointsQuery.data
  const data = React.useMemo(
    () => [currentUser, ...(leaderboardQuery.data?.leaderboard ?? [])],
    [useUserPointsQuery.dataUpdatedAt, leaderboardQuery.dataUpdatedAt],
  )

  const table = useTable({
    //@ts-ignore
    data: data,
  })

  return (
    <div className="mt-16 !text-white">
      <Title variant={"title1"} className="mb-10">
        Leaderboard
      </Title>
      <DataTable
        table={table}
        isError={!!leaderboardQuery.error}
        isLoading={leaderboardQuery.isLoading}
        pagination={{
          onPageChange: setPageDetails,
          page,
          pageSize,
          count: 1,
        }}
        tableRowClasses="text-white"
        isRowHighlighted={(row) => row.account === currentUser?.account}
      />
    </div>
  )
}
