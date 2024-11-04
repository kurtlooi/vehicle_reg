# Vehicle Registration Management System

A web application built with Angular that provides administrators with comprehensive vehicle registration and de-registration management capabilities. The system offers multiple view formats, filtering options, and detailed vehicle information access.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v16.x or later)
- npm (v8.x or later)
- Angular CLI (v16.x or later)

## Installation

1. Clone the repository

```bash
git clone https://github.com/kurtlooi/vehicle_reg.git
cd vehicle_reg
```

2. Install dependencies

```bash
npm install
```

## Data Setup

The application requires CSV data files in the `src/assets/data` directory:

- `personal.csv` - Registered personal vehicles
- `deregpersonal.csv` - De-registered personal vehicles
- `commercial.csv` - Registered commercial vehicles
- `deregcommercial.csv` - De-registered commercial vehicles

## Development Server

Run the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Features

### Core Features

- Calendar period format view
- List view format
- Vehicle status visualization
- Status-based filtering
- Vehicle type filtering
- Detailed vehicle information view

### Bonus Features

- Multiple view options (list/table)
- Toggle between monthly, yearly, and list views
- Mobile responsive design
- Commercial/personal vehicle filtering
- Enhanced UI/UX
- Cloud deployment support

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── calendar-view/
│   │   ├── list-view/
│   │   └── vehicle-details/
│   ├── services/
│   │   └── vehicle.service.ts
│   ├── models/
│   │   └── vehicle.model.ts
│   └── shared/
├── assets/
│   └── data/
└── environments/
```

## Environment Configuration

Configure the environment files in `src/environments/` for different deployment scenarios:

- `environment.ts` - Development environment

## Deployment

1. Build the application for production

```bash
ng build --configuration production
```

2. Deploy the contents of the `dist/` directory to your preferred hosting service

## Browser Support

The application supports the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
