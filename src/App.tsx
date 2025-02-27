import { Button, Radio, Checkbox } from "pecan-ui";
import { Layout, FlexRow } from "./components/Layout";
import { useState } from "react";

function App() {
  const [disabled, setDisable] = useState(true);
  const toggleDisabled = () => {
    setDisable((prev) => !prev);
  };
  return (
    <>
      <Layout
        header="Syntactic sugar"
        paragraph="Through the type syntactic sugar, use the preset button styles:
          primary buttons, default buttons, dashed buttons, text buttons, and
          link buttons."
      >
        <FlexRow>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </FlexRow>
      </Layout>
      <Layout
        header="Color & Variant"
        paragraph=" You can set the color and variant attributes at the same time can
          derive more variant buttons."
      >
        <FlexRow>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Button color="default" variant="solid">
                Solid
              </Button>
              <Button color="default" variant="outlined">
                Outlined
              </Button>
              <Button color="default" variant="dashed">
                Dashed
              </Button>
              <Button color="default" variant="filled">
                Filled
              </Button>
              <Button color="default" variant="text">
                Text
              </Button>
              <Button color="default" variant="link">
                Link
              </Button>
            </div>
            <div className="flex gap-2">
              <Button color="primary" variant="solid">
                Solid
              </Button>
              <Button color="primary" variant="outlined">
                Outlined
              </Button>
              <Button color="primary" variant="dashed">
                Dashed
              </Button>
              <Button color="primary" variant="filled">
                Filled
              </Button>
              <Button color="primary" variant="text">
                Text
              </Button>
              <Button color="primary" variant="link">
                Link
              </Button>
            </div>
            <div className="flex gap-2">
              <Button color="danger" variant="solid">
                Solid
              </Button>
              <Button color="danger" variant="outlined">
                Outlined
              </Button>
              <Button color="danger" variant="dashed">
                Dashed
              </Button>
              <Button color="danger" variant="filled">
                Filled
              </Button>
              <Button color="danger" variant="text">
                Text
              </Button>
              <Button color="danger" variant="link">
                Link
              </Button>
            </div>
            <div className="flex gap-2">
              <Button color="amber" variant="solid">
                Solid
              </Button>
              <Button color="amber" variant="outlined">
                Outlined
              </Button>
              <Button color="amber" variant="dashed">
                Dashed
              </Button>
              <Button color="amber" variant="filled">
                Filled
              </Button>
              <Button color="amber" variant="text">
                Text
              </Button>
              <Button color="amber" variant="link">
                Link
              </Button>
            </div>
            <div className="flex gap-2">
              <Button color="teal" variant="solid">
                Solid
              </Button>
              <Button color="teal" variant="outlined">
                Outlined
              </Button>
              <Button color="teal" variant="dashed">
                Dashed
              </Button>
              <Button color="teal" variant="filled">
                Filled
              </Button>
              <Button color="teal" variant="text">
                Text
              </Button>
              <Button color="teal" variant="link">
                Link
              </Button>
            </div>
            <div className="flex gap-2">
              <Button color="cyan" variant="solid">
                Solid
              </Button>
              <Button color="cyan" variant="outlined">
                Outlined
              </Button>
              <Button color="cyan" variant="dashed">
                Dashed
              </Button>
              <Button color="cyan" variant="filled">
                Filled
              </Button>
              <Button color="cyan" variant="text">
                Text
              </Button>
              <Button color="cyan" variant="link">
                Link
              </Button>
            </div>
          </div>
        </FlexRow>
      </Layout>
      <Layout
        header="Danger Buttons"
        paragraph="The danger is a property of buttons after antd 4.0."
      >
        <FlexRow>
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger>
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </FlexRow>
      </Layout>

      <Layout
        header="Ghost Button"
        paragraph="The ghost property will make a button's background transparent, this is commonly used in colored background."
      >
        <FlexRow>
          <div className="bg-gray-300 p-7 flex flex--row gap-2">
            <Button type="primary" ghost>
              Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
              Dashed
            </Button>
            <Button type="primary" danger ghost>
              Danger
            </Button>
          </div>
        </FlexRow>
      </Layout>
      <Layout header="Basic" paragraph="The simplest use.">
        <div className="flex gap-4">
          <Radio>Radio</Radio>
          <Radio checked>Checked Radio</Radio>
        </div>
      </Layout>
      <Layout header="Disabled" paragraph="Radio unavailable.">
        <div className="flex gap-4">
          <Radio defaultChecked={false} disabled={disabled}>
            Disabled
          </Radio>
          <Radio defaultChecked disabled={disabled}>
            Disabled
          </Radio>
        </div>
        <Button type="primary" onClick={toggleDisabled}>
          Toggle disabled
        </Button>
      </Layout>
      <Layout>
        <div className="flex gap-4">
          <Radio.Group
            value={1}
            options={[
              { value: 1, label: "option 1" },
              { value: 2, label: "option 2" },
              { value: 3, label: "option 3" },
              { value: 4, label: "option 4", disabled: true },
              { value: 5, label: "option 5" },
            ]}
          ></Radio.Group>
        </div>
      </Layout>
      <Layout>
        <Radio.Group
          optionType="button"
          value={1}
          options={[
            { value: 1, label: "option 1" },
            { value: 2, label: "option 2" },
            { value: 3, label: "option 3" },
            { value: 4, label: "option 4", disabled: true },
            { value: 5, label: "option 5" },
          ]}
        ></Radio.Group>
      </Layout>
      <Layout>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={1}
          options={[
            { value: 1, label: "option 1" },
            { value: 2, label: "option 2" },
            { value: 3, label: "option 3" },
            { value: 4, label: "option 4", disabled: true },
          ]}
        ></Radio.Group>
      </Layout>

      <Checkbox>Helloooo!</Checkbox>
      <Checkbox checked={true}>Helloooo!</Checkbox>
      <Checkbox checked={true} disabled>
        Helloooo!
      </Checkbox>
    </>
  );
}

export default App;
