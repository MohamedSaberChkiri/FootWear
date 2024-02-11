"use client"

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CustomSeparator() {
  const pathname = usePathname();

  // Reusable logic for generating breadcrumbs
  const generateBreadcrumbs = (parts: string[]) =>
    parts.map((part, index) => {
      // Handle first item (always "HOME")
      if (index === 0) {
        return (
          <Link underline="hover" key={index} href="/" className="text-gray-300">
            HOME
          </Link>
        );
      }

      // Determine if the segment is dynamic (e.g., a number)
      const isDynamicSegment = index < parts.length - 1;

      // Set the label and href based on whether the segment is dynamic
      const label = isDynamicSegment ? 'SNEAKER' : part.toUpperCase();
      const href = isDynamicSegment ? `/${part}` : null;

      return (
        <Typography key={index} className="text-gray-300">
          {href ? (
            <Link underline="hover" href={href} className="text-gray-300">
              {label}
            </Link>
          ) : (
            label
          )}
        </Typography>
      );
    });

  // Extract path parts, handling potential errors
  const pathParts = pathname.split('/');
  if (pathParts[0] !== '') {
    console.error('Invalid pathname format. Breadcrumbs will not be generated.');
    return null; // Or display an error message
  }
  const validParts = pathParts.slice(1); // Remove leading empty string

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs(validParts);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className="text-white"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
