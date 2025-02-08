"use client";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Autocomplete,
  AutocompleteItem,
  RangeCalendar,
} from "@heroui/react";
import { useState, useTransition } from "react";
import { createTrip } from "@/app/_actions/trips";
import { travelStyles, pace } from "@/app/_lib/data";
import { today, getLocalTimeZone } from "@internationalized/date";

const TripForm = () => {
  const [hotelReservation, setHotelReservation] = useState<boolean>(false);
  const [planeTickets, setPlaneTickets] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<Date[] | undefined>(
    undefined
  );

  const [isPending, startTransition] = useTransition();

  const handlePress = async (formData: FormData) => {
    if (selectedRange) {
      formData.append("start_date", new Date(selectedRange[0]).toISOString());
      formData.append("end_date", new Date(selectedRange[1]).toISOString());
    }

    startTransition(() => {
      createTrip(formData);
    });
  };

  return (
    <Form
      validationBehavior="native"
      className="flex flex-col w-fit justify-center mx-auto gap-4"
      action={handlePress}
    >
      <Input
        isRequired
        label="Destination"
        labelPlacement="outside"
        name="destination"
        placeholder="Enter your destination"
        type="text"
        variant="bordered"
      />
      <div className="w-full h-full flex flex-col items-center text-black">
        <RangeCalendar
          aria-label="Dates"
          minValue={today(getLocalTimeZone())}
          showMonthAndYearPickers
          visibleMonths={2}
          color="primary"
          defaultValue={selectedRange}
          onChange={(e) => setSelectedRange([e.start, e.end])}
        />
      </div>
      <Input
        endContent={
          <div className="flex items-center ">
            <label className="sr-only" htmlFor="currency">
              Currency
            </label>
            <select
              className="outline-none border-0 bg-transparent text-black text-small"
              id="currency"
              name="currency"
            >
              <option>USD</option>
              <option>ARS</option>
              <option>EUR</option>
            </select>
          </div>
        }
        isRequired
        label="Budget"
        labelPlacement="outside"
        placeholder="0.00"
        name="budget"
        variant="bordered"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-small text-black">$</span>
          </div>
        }
        type="number"
      />
      <div className="flex gap-4">
        <Autocomplete
          isRequired
          className=""
          defaultItems={travelStyles}
          label="Style"
          labelPlacement="outside"
          name="style"
          placeholder="What type of holiday?"
          variant="bordered"
        >
          {travelStyles.map((style) => (
            <AutocompleteItem key={style.key}>{style.label}</AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          isRequired
          className=""
          defaultItems={pace}
          label="Pace"
          labelPlacement="outside"
          name="pace"
          placeholder="What pace suits you?"
          variant="bordered"
        >
          {pace.map((p) => (
            <AutocompleteItem key={p.key}>{p.label}</AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <Input
        label="Must-see places?"
        labelPlacement="outside"
        name="must-see"
        placeholder="eg. Eiffel Tower, Louvre etc."
        type="text"
        variant="bordered"
      />
      <div className="flex gap-4 w-full">
        <div className="flex gap-2">
          <Checkbox
            isSelected={planeTickets}
            onValueChange={setPlaneTickets}
            name="planeTickets"
            value={planeTickets}
          >
            <p className="text-black">Need plane tickets?</p>
          </Checkbox>
        </div>
        <div className="flex gap-2">
          <Checkbox
            isSelected={hotelReservation}
            onValueChange={setHotelReservation}
            name="hotelReservation"
            value={hotelReservation}
          >
            <p className="text-black">Need a hotel?</p>
          </Checkbox>
        </div>
      </div>
      <Button type="submit" variant="bordered" className="text-black">
        Xplor
      </Button>
    </Form>
  );
};

export default TripForm;
