"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  title: string;
  price: string;
  description: string;
  category: string;
}

interface FormErrors {
  title?: string;
  price?: string;
  description?: string;
  category?: string;
}

export default function AddProductPage() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Precisa de um título";
    }
    if (!formData.price.trim()) {
      newErrors.price = "Precisa de um preço";
    } else if (isNaN(parseFloat(formData.price))) {
      newErrors.price = "Preço precisa ser um numero inteiro";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Precisade uma descrição";
    }
    if (!formData.category.trim()) {
      newErrors.category = "Precisa de uma categoria";
    }

    if (Object.keys(newErrors).length === 0) {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Produto adicionado:", json);
          setFormData({
            title: "",
            price: "",
            description: "",
            category: "",
          });
        })
        .catch((error) => {
          console.error("Erro ao adicionar produto:", error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="mt-5 flex flex-col w-full items-center">
      <h1 className="text-xl text-secondary font-semibold mb-4">Adicionar Produto</h1>
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label htmlFor="title" className="block text-md font-bold text-secondary">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`pl-1 block w-full shadow-sm text-lg text-dark border-lighter rounded-md ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-md font-bold text-secondary">
            Preço
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`pl-1 block w-full shadow-sm text-lg text-dark border-lighter rounded-md ${
              errors.price ? "border-red-500" : ""
            }`}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-md font-bold text-secondary">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`pl-1 block w-full shadow-sm text-lg text-dark border-lighter rounded-md ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-md font-bold text-secondary">
            Categoria
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`pl-1 block w-full shadow-sm text-lg text-dark border-lighter rounded-md ${
              errors.category ? "border-red-500" : ""
            }`}
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded hover:bg-gradient-to-r hover:from-lighter hover:to-darker"
        >
          Adicionar Produto
        </button>
      </form>
    </div>
  );
}
