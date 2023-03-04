import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { createRef } from "react";
import { BOOKING_TYPE } from "../../../../constants/bookingType";
import { useBooking } from "../../../../state/booking";
import { useLocation } from "../../../../state/location";
import { useOnClickOutside } from "../../../../utils/hooks/useClickOutside";
import { BookingModalOverlay } from "./BookingModalOverlay";

interface Props {
  handleClose: () => void;
}

export const BookingModal = ({ handleClose }: Props) => {
  const ref = createRef<HTMLElement>();
  const location = useLocation();
  const { setBooking } = useBooking();
  const router = useRouter();
  const { id, name } = location;

  useOnClickOutside(ref, () => handleClose());

  const handleRouting = async () => {
    await router.push("/checkout");
  };

  const handleCheckout = () => {
    setBooking({
      type: BOOKING_TYPE.SPORT, // @TODO: set this from landing page/form
      location,
    });

    void handleRouting();
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <BookingModalOverlay />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          --> */}
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            ref={ref}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="space-between mb-2 flex w-full items-center border-b pb-2">
                    <h2
                      className="flex-grow text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Book
                    </h2>

                    {/* // @TODO: move button to Icon */}
                    <button
                      type="button"
                      className="justify-center px-4 py-2 font-medium text-black text-white shadow-sm"
                      onClick={handleClose}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  <div className="mb-2">
                    <h3>{name}</h3>
                    {/* // @TODO: replace address with state */}
                    <span>Lupus Street, Westminster, London, SW1V 3AT</span>
                  </div>
                  <div className="mb-2">
                    {/* // @TODO: replace image with state */}
                    <img src="/images/location/pimlico_academy.jpg" />
                  </div>
                  <div className="">
                    <p className="text-sm">Sport: Basketball</p>
                    <p className="text-sm">Time: 11:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
