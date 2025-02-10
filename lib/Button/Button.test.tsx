import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="bg-amber-400 cursor-pointer p-10"
          type="button"
        >
          My button
        </button>
      </div>
    `);
  });
});
