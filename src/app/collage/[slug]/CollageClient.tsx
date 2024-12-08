"use client";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

const CollageClient = ({ data }: { data: any }) => {
  const gridSize = Math.ceil(Math.sqrt(data.length));
  const form = useForm();
  const [values, setValues] = useState<any>({});
  const collageRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    artistName: string,
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setValues((prev: any) => {
      if (!event.target.value) {
        const { [index]: _, ...rest } = prev;

        return rest;
      }

      return {
        ...prev,
        [index]: {
          artistName: artistName || undefined,
          value: event.target.value || undefined,
        },
      };
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "+" || e.key === "0") {
      e.preventDefault();
    }
  };

  const onSubmit = (formValues: any) => {
    console.log("🚀 ~ onSubmit ~ collageRef.current:", collageRef);
    if (collageRef.current) {
      html2canvas(collageRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = "captured-image.png"; // Nome do arquivo
        link.click();
      });

      console.log("Submitted values:", formValues);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-2 justify-center items-center min-h-screen gap-4 ">
      {/* Formulário */}
      <div className="w-full max-w-lg bg-white p-4 m-4 rounded">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <h1 className="text-xl font-bold text-center">Your top artists</h1>
            {data.map((artist: any, index: number) => (
              <FormField
                key={artist.name}
                control={form.control}
                name={artist.name}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      {index + 1}. {artist.name}
                    </label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="quantity"
                        min="1" // Permite apenas valores positivos
                        maxLength={4} // Limita o número de caracteres a 4
                        {...field}
                        onKeyDown={handleKeyDown}
                        onChange={(event) => {
                          field.onChange(event); // Atualiza o React Hook Form
                          handleInputChange(artist.name, event, index); // Atualiza o estado
                        }}
                        className="w-[130px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Grid de imagens */}
            <div
              className={`relative grid aspect-square w-full`} // Força um quadrado perfeito
              style={{
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Define as colunas dinamicamente
                gridTemplateRows: `repeat(${gridSize}, 1fr)`, // Define as linhas dinamicamente
              }}
              ref={collageRef}
            >
              {data.map((artist: any, index: number) => (
                <div
                  key={artist.name}
                  className="relative flex items-center justify-center w-full h-full aspect-square" // Filhos também são quadrados perfeitos
                >
                  {/* Fundo escuro */}
                  {values[index]?.value && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}

                  <div>
                    {/* Número no canto inferior esquerdo */}
                    {values[index]?.value && (
                      <span className="absolute top-0 left-0 text-white text-[6px] p-1 z-10">
                        {values[index].artistName}
                      </span>
                    )}
                    {values[index]?.value && (
                      <span className="absolute bottom-1 left-1 text-white font-bold text-[16px] pb-1 z-10">
                        {values[index].value}x
                      </span>
                    )}
                  </div>

                  {/* Imagem */}
                  <Image
                    src={artist.img}
                    alt={artist.name}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                    className={`object-cover w-full h-full ${
                      values[index] !== undefined ? "opacity-100" : "opacity-30"
                    }`}
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CollageClient;
