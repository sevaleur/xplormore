"use client";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Autocomplete,
  AutocompleteItem,
} from "@heroui/react";
import { useState, useTransition } from "react";
import { createNewTrip } from "@/actions/trips";
import { travelStyles, pace } from "@/utils/data";
import { redirect } from "next/navigation";

const TripForm = () => {
  const [hotelReservation, setHotelReservation] = useState(false);
  const [planeTickets, setPlaneTickets] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handlePress = async (formData: FormData) => {
    startTransition(() => {
      createNewTrip(formData);
    });

    redirect("/dashboard/itinerary-creation");
  };

  return (
    <Form
      validationBehavior="native"
      className="flex flex-col gap-4 w-100 justify-center"
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
      <div className="flex gap-2">
        <Input
          isRequired
          label="Start date"
          labelPlacement="outside"
          name="startDate"
          placeholder="1/1/2026"
          type="date"
          variant="bordered"
        />
        <Input
          isRequired
          label="End date"
          labelPlacement="outside"
          name="endDate"
          placeholder="1/10/2026"
          type="date"
          variant="bordered"
        />
      </div>
      <Input
        endContent={
          <div className="flex items-center">
            <label className="sr-only" htmlFor="currency">
              Currency
            </label>
            <select
              className="outline-none border-0 bg-transparent text-default-400 text-small"
              id="currency"
              name="currency"
            >
              <option>USD</option>
              <option>ARS</option>
              <option>EUR</option>
            </select>
          </div>
        }
        label="Budget"
        labelPlacement="outside"
        placeholder="0.00"
        name="budget"
        variant="bordered"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
        type="number"
      />
      <Autocomplete
        isRequired
        className="max-w-xs"
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
        className="max-w-xs"
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
      <Input
        label="Must-see places?"
        labelPlacement="outside"
        name="must-see"
        placeholder="eg. Eiffel Tower, Louvre etc."
        type="text"
        variant="bordered"
      />
      <Checkbox
        isSelected={planeTickets}
        onValueChange={setPlaneTickets}
        name="planeTickets"
        value={planeTickets}
      >
        Need Plane Tickets?
      </Checkbox>
      <Checkbox
        isSelected={hotelReservation}
        onValueChange={setHotelReservation}
        name="hotelReservation"
        value={hotelReservation}
      >
        Need a Hotel?
      </Checkbox>
      <Button type="submit" variant="bordered">
        Xplor
      </Button>
    </Form>
  );
};

export default TripForm;
