# Food Detector Project

This project consists of a frontend application (food_detector) and a machine learning backend (ml_backend) for detecting food in images.

## Prerequisites

- Node.js and npm (for frontend)
- Python 3.7+ (for backend)
- pip (Python package manager)

## Setup and Running

### Frontend (food_detector)

1. Navigate to the frontend directory:

   ```
   cd food_detector
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

The frontend should now be running and accessible via a web browser.

### Backend (ml_backend)

1. Navigate to the backend directory:

   ```
   cd ml_backend
   ```

2. Create a virtual environment:

   ```
   python3 -m venv env
   ```

3. Activate the virtual environment:

   ```
   source env/bin/activate
   ```

4. Install required packages:

   ```
   pip install -r requirements.txt
   ```

5. Run the backend server:
   ```
   python3 main.py
   ```

The backend should now be running and ready to process requests from the frontend.

## Project Structure

- `food_detector/`: Web application with Next.js and Tailwind
- `ml_backend/`: Machine learning backend using python
  - `main.py`: Main entry point for the backend server
  - `ml_yolo.py`: YOLOv8 implementation for food detection
  - `yolov8l.pt`: YOLOv8 model weights
  - `requirements.txt`: Python dependencies

[Download the PDF](./document.pdf)
