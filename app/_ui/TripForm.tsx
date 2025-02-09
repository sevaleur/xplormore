"use client";

import {
  Form,
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
  DatePicker,
} from "@heroui/react";
import { travelStyles, pace } from "@/app/_lib/data";
import { today, getLocalTimeZone } from "@internationalized/date";
import { createTrip } from "@/app/_actions/trips";
import { useTransition } from "react";

const TripForm = () => {
  const [isPending, startTransition] = useTransition();

  const handlePress = async (formData: FormData) => {
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
        disabled={isPending}
      />
      <div className="w-full h-full flex gap-4 text-black">
        <DatePicker
          defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })}
          label="Start Date"
          labelPlacement="outside"
          name="startDate"
          minValue={today(getLocalTimeZone())}
          isDisabled={isPending}
          isRequired
        />
        <DatePicker
          defaultValue={today(getLocalTimeZone()).add({ days: 7 })}
          label="End Date"
          labelPlacement="outside"
          name="endDate"
          isDisabled={isPending}
          isRequired
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
        disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
        disabled={isPending}
      />
      <Button type="submit" variant="bordered" className="text-black">
        Xplor
      </Button>
    </Form>
  );
};

export default TripForm;
