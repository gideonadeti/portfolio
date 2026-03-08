import Image from "next/image";

import { Dialog, DialogContent } from "./ui/dialog";

interface AvatarDialogProps {
  open: boolean;
  src: string;
  alt: string;
  onOpenChange: (open: boolean) => void;
}

export function AvatarDialog({
  open,
  src,
  alt,
  onOpenChange,
}: AvatarDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[min(90vw,85vh)] border-none bg-transparent p-0 shadow-none [&>button]:bg-background [&>button]:rounded-full [&>button]:right-2 [&>button]:top-2 [&>button]:opacity-80 [&>button]:hover:opacity-100">
        <div className="relative aspect-square w-full max-w-[min(90vw,85vh)] max-h-[85vh] overflow-hidden rounded-full ring-2 ring-white/20 shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
