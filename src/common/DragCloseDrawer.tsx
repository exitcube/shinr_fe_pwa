import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { X } from "lucide-react";
import useMeasure from "react-use-measure";

export const DragCloseDrawer: React.FC<IProps> = ({
  open,
  setOpen,
  children,
  title,
}) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 flex justify-center w-full"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 overflow-hidden rounded-t-3xl max-w-md w-full bg-[#F5F5F5] overflow-y-scroll no-scrollbar"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center justify-between pt-3">
                <h2 className="text-lg font-poppins text-[#101010]">{title}</h2>
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close location modal"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>
            <div className="relative z-0 h-full w-full p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
}
