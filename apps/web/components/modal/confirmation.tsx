"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"
import LoadingButton from "@workspace/ui/components/loading-button"
import { useConfirmationModal } from "@/store/space"

const ConfirmationModal = () => {
  const { isOpen, onClose, title, description, onConfirm, onCancel, isLoading } =
    useConfirmationModal()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <LoadingButton
            onClick={onConfirm}
            loading={isLoading}
            disabled={isLoading}
            variant="destructive"
          >
            Confirm
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmationModal
