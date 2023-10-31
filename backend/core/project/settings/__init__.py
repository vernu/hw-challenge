from pathlib import Path
from split_settings.tools import include

BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent


base_settings = [
    'components/common.py',
    'components/database.py',
    'components/logging.py',
]

include(*base_settings)