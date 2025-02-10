import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="p-[1px] bg-blue-300 cursor-pointer"
          type="button"
        >
          My button
        </button>
      </div>
    `);
  });
});
