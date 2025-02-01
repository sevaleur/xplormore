"use client";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Autocomplete,
  AutocompleteItem,
} from "@heroui/react";
import { useState } from "react";
import { createNewTrip } from "@/actions/trips";
import { travelStyles, travelTypes, pace } from "@/utils/data";

const TripCreation = () => {
  const [hotelReservation, setHotelReservation] = useState(false);
  const [planeTickets, setPlaneTickets] = useState(false);

  return (
    <Form
      validationBehavior="native"
      className="flex flex-col gap-4 w-100 justify-center"
      action={createNewTrip}
    >
      <Input
        isRequired
        label="Destination"
        name="destination"
        placeholder="Enter your destination"
        type="text"
        variant="bordered"
      />
      <div className="flex gap-2">
        <Input
          isRequired
          label="Start date"
          name="startDate"
          placeholder="1/1/2026"
          type="date"
          variant="bordered"
        />
        <Input
          isRequired
          label="End date"
          name="endDate"
          placeholder="1/10/2026"
          type="date"
          variant="bordered"
        />
      </div>
      <Input
        isRequired
        label="Budget (USD)"
        name="budget"
        placeholder="0.00"
        type="number"
        variant="bordered"
      />
      <Autocomplete
        isRequired
        className="max-w-xs"
        defaultItems={travelTypes}
        label="Type"
        name="type"
        placeholder="What type of trip?"
        variant="bordered"
      >
        {travelTypes.map((type) => (
          <AutocompleteItem key={type.key}>{type.label}</AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        isRequired
        className="max-w-xs"
        defaultItems={travelStyles}
        label="Style"
        name="style"
        placeholder="Find your style"
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

export default TripCreation;
