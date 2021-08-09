import React from 'react';

interface Props {
  title: string;
  description: string;
}

export default function JetSectionTitle({ title, description }: Props) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
