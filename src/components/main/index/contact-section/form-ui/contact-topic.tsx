// prettier-ignore
import {Button, ListBox, ListBoxItem, Popover, Select, SelectProps, SelectValue,} from "react-aria-components";

interface Props extends SelectProps<Props> {
  topics: string[];
}

export const ContactTopic = ({ topics, placeholder, ...props }: Props) => {
  return (
    <Select
      placeholder={placeholder}
      className="flex h-[44px] w-full border-b-2 border-ebony-950 px-2 text-ebony-950"
      {...props}
    >
      <Button className="flex w-full items-center justify-between text-sm outline-none sm:text-base">
        <SelectValue className={"w-fit"} />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover className={"font-plex-mono"}>
        <ListBox className="w-full space-y-1 rounded border border-ebony-950/50 bg-ebony-50 p-1 text-sm outline-ebony-950/50 sm:text-base">
          <ListBoxItem
            id={0}
            className="cursor-pointer px-2 py-1 text-ebony-950/50 transition-colors duration-100"
          >
            {placeholder}
          </ListBoxItem>
          {topics.map((topic, index) => (
            <ListBoxItem
              key={"topic : " + index}
              id={index + 1}
              className={({ isFocused }) =>
                `w-full cursor-pointer px-2 py-1 transition-colors duration-200
              ${isFocused && "bg-ebony-950 text-flower-50 outline-none"}`
              }
            >
              {topic}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};
