import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="group btn py-[3px] px-[10px] rounded-md bg-white hover:bg-white text-default-dark hover:text-primary-500 border-1 border-solid border-default-light hover:border-primary-500"
          type="button"
        >
          My button
        </button>
      </div>
    `);
  });
});
