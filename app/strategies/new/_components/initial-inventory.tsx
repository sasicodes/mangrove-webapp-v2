import { Text } from "@/components/typography/text"
import { cn } from "@/utils"

export function InitialInventory({ className }: { className?: string }) {
  return (
    <div className={cn("p-6", className)}>
      <Text>Set initial inventory</Text>
    </div>
  )
}
