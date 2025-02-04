import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { create, CreateSuperheroDto } from "../../models/superhero";

type CreationFormProps = {
  onCreate: () => void;
};

export default function CreationForm({ onCreate }: CreationFormProps) {
  const [formData, setFormData] = useState<CreateSuperheroDto>({
    name: "",
    power: "",
    humility: 5,
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof CreateSuperheroDto
  ) => {
    setFormData({ ...formData, [field]: e.target });
  };

  const addItem = async () => {
    const { name, power, humility } = formData;
    const humilityValue = Number(humility);

    if (!name || !power || isNaN(humilityValue)) {
      setError("All fields are required!");
      return;
    }

    if (humilityValue < 1 || humilityValue > 10) {
      setError("Humility must be between 1 and 10.");
      return;
    }

    try {
      await create(formData);
    } catch {
      setError("Cant create the Superhero :(");
      return;
    }

    onCreate();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Please, add a humble superhero!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            placeholder="Enter name"
          />
        </div>
        <div>
          <Label htmlFor="power">Superpower</Label>
          <Input
            id="power"
            name="power"
            value={formData.power}
            onChange={(e) => handleChange(e, "power")}
            placeholder="Enter power"
          />
        </div>
        <div>
          <Label htmlFor="humility">Humility (1-10)</Label>
          <Input
            id="humility"
            name="humility"
            type="number"
            value={formData.humility}
            onChange={(e) => handleChange(e, "humility")}
            placeholder="Enter humility level"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button onClick={addItem} className="w-full">
          Add
        </Button>
      </CardContent>
    </Card>
  );
}
